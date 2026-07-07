const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const fs = require('fs'); // ডাইনামিক ফোল্ডার তৈরির জন্য fs মডিউল যোগ করা হয়েছে

// ১. dotenv কনফিগারেশন
dotenv.config();

const app = express();

// ২. মিডলওয়্যারস
app.use(cors());
app.use(express.json());
// uploads ফোল্ডারকে স্ট্যাটিক করা যাতে ব্রাউজার থেকে ইমেজ দেখা যায়
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// ৩. MongoDB কানেকশন
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('🚀 MongoDB Connected Successfully'))
  .catch(err => console.error('❌ MongoDB Connection Failed:', err.message));

// ৪. Mongoose স্কিমা ও মডেল (category ফিল্ড সহ আপডেট করা হয়েছে)
const ProductServiceSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  category: { type: String, enum: ['main-service', 'shade-type'], required: true }, 
  slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
  banerImg: { type: String, required: true },
  headline: { type: String, required: true, trim: true },
  description: { type: String, required: true },
  extraIMGs: {
    type: [String],
    validate: {
      validator: function(array) { return array.length === 8; },
      message: 'The extraIMGs field must contain exactly 8 images.'
    },
    required: true
  },
  createdAt: { type: Date, default: Date.now }
});

const ProductService = mongoose.model('ProductService', ProductServiceSchema);

// ৫. Multer কনফিগারেশন (ক্যাটাগরি অনুযায়ী ডাইনামিক ফোল্ডার লজিক)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // ফ্রন্টএন্ড থেকে কোয়েরি প্যারামিটার হিসেবে পাঠানো ক্যাটাগরি নেওয়া (Default: general)
    const category = req.query.category || 'general';
    const uploadPath = path.join('uploads', category);

    // ফোল্ডার না থাকলে নোড জেএস অটোমেটিক তৈরি করে নেবে
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }

    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Only images are allowed!'), false);
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

// ৬. মাল্টিপল ফিল্ডের জন্য মাল্টার মিডলওয়্যার ডিফাইন করা
const cpUpload = upload.fields([
  { name: 'banerImg', maxCount: 1 },
  { name: 'extraIMGs', maxCount: 8 }
]);


// ==========================================
// 🚀 রাউটস (ROUTES)
// ==========================================

// ক) নতুন সার্ভিস বা প্রোডাক্ট যোগ করার রাউট (POST)
app.post('/api/products/add', cpUpload, async (req, res) => {
  try {
    const { title, slug, headline, description, category } = req.body;

    // ফাইল চেক করা
    if (!req.files || !req.files['banerImg'] || !req.files['extraIMGs']) {
      return res.status(400).json({ success: false, message: 'Please upload all required images.' });
    }

    // ঠিক ৮টি ইমেজ আছে কিনা ভ্যালিডেশন
    if (req.files['extraIMGs'].length !== 8) {
      return res.status(400).json({ success: false, message: 'You must upload exactly 8 extra images.' });
    }

    // ইউআরএল কোয়েরি অথবা বডি থেকে ক্যাটাগরি নিশ্চিত করা
    const finalCategory = category || req.query.category || 'general';

    // ডেটাবেসের জন্য সঠিক ডাইনামিক ইমেজের পাথ তৈরি করা
    const banerImgPath = `/uploads/${finalCategory}/${req.files['banerImg'][0].filename}`;
    const extraIMGsPaths = req.files['extraIMGs'].map(file => `/uploads/${finalCategory}/${file.filename}`);

    // ডেটাবেসে ডেটা তৈরি ও সেভ করা
    const newProductService = new ProductService({
      title,
      category: finalCategory,
      slug,
      headline,
      description,
      banerImg: banerImgPath,
      extraIMGs: extraIMGsPaths
    });

    const savedData = await newProductService.save();
    res.status(201).json({ success: true, data: savedData });

  } catch (error) {
    // স্ল্যাগ বা অন্য কোনো কারণে ইউনিক কি ভ্যালিডেশন এরর হ্যান্ডলিং
    if (error.code === 11000) {
      return res.status(400).json({ success: false, message: 'Slug must be unique. This one already exists.' });
    }
    res.status(500).json({ success: false, message: error.message });
  }
});

// খ) সব ডেটা একসাথে গেট করার রাউট (GET ALL)
app.get('/api/products', async (req, res) => {
  try {
    const allProducts = await ProductService.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: allProducts });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// গ) নির্দিষ্ট একটি সিঙ্গেল ডেটা স্ল্যাগ দিয়ে খোঁজার রাউট (GET SINGLE BY SLUG)
app.get('/api/products/:slug', async (req, res) => {
  try {
    const product = await ProductService.findOne({ slug: req.params.slug });
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product/Service not found' });
    }
    res.status(200).json({ success: true, data: product });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});



// 🗑️ অ্যাডভান্সড ডিলিট এপিআই (ডাটাবেস + লোকাল ফাইল সিস্টেম থেকে ফাইল রিমুভ)
app.delete("/api/products/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // ১. প্রথমে ডাটাবেস থেকে প্রোডাক্টটি খুঁজে বের করা
    const product = await ProductService.findById(id);
    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found!" });
    }

    // ২. হেল্পার ফাংশন: ফাইল ডিলিট করার জন্য (পাথ ফিক্স সহ)
    const deleteFile = (relativeFilePath) => {
      if (!relativeFilePath) return;
      
      // শুরুতে থাকা ব্যাকস্ল্যাশ বা স্ল্যাশগুলো কেটে দেওয়া (যেমন: /uploads/.. হয়ে যাবে uploads/..)
      const cleanPath = relativeFilePath.replace(/^\/+/, "");
      
      // বর্তমান ডিরেক্টরি (__dirname) থেকে সরাসরি ফাইলটির সঠিক ও পূর্ণাঙ্গ পাথ তৈরি করা
      const absolutePath = path.join(__dirname, cleanPath);

      // ফোল্ডারে ফাইলটি আসলেই আছে কিনা চেক করে ডিলিট করা
      if (fs.existsSync(absolutePath)) {
        fs.unlink(absolutePath, (err) => {
          if (err) console.error(`❌ Error deleting file ${relativeFilePath}:`, err.message);
          else console.log(`🗑️ Successfully deleted file from server: ${cleanPath}`);
        });
      } else {
        console.log(`⚠️ File not found on server path: ${absolutePath}`);
      }
    };

    // ৩. মেইন ব্যানার ইমেজ সার্ভার ফোল্ডার থেকে ডিলিট করা
    deleteFile(product.banerImg);

    // ৪. লুপ চালিয়ে ৮টি এক্সট্রা ইমেজ ফোল্ডার থেকে ডিলিট করা
    if (product.extraIMGs && product.extraIMGs.length > 0) {
      product.extraIMGs.forEach((img) => deleteFile(img));
    }

    // ৫. সব ইমেজ ফাইল কাটার পর ফাইনালি ডাটাবেস থেকে ডকুমেন্ট ডিলিট করা
    await ProductService.findByIdAndDelete(id);

    res.json({ success: true, message: "Product and all 9 associated images deleted successfully from server!" });
  } catch (error) {
    console.error("Delete Error:", error);
    res.status(500).json({ success: false, message: "Server error during deletion." });
  }
});


// ৭. সার্ভার লিসেনিং
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`📡 Server running on port ${PORT}`);
});