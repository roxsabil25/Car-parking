const multer = require('multer');
const path = require('path');
const fs = require('fs');

// ফাইল কোথায় সেভ হবে এবং কী নামে সেভ হবে তার কনফিগারেশন
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // ফ্রন্টএন্ড থেকে কোয়েরি প্যারামিটার হিসেবে ক্যাটাগরি নেওয়া (Default: 'general')
    const category = req.query.category || 'general';
    
    // ডাইনামিক পাথ তৈরি করা (যেমন: uploads/main-service বা uploads/shade-type)
    const uploadPath = path.join('uploads', category);

    // ফোল্ডারটি যদি তৈরি করা না থাকে, তবে নোড জেএস অটোমেটিক তৈরি করে নেবে
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

// শুধুমাত্র ইমেজ ফাইল ফিল্টার করার জন্য
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Only images are allowed!'), false);
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

module.exports = upload;