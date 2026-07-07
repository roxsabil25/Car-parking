const mongoose = require('mongoose');

const ProductServiceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true
  },
  category: { type: String, enum: ['main-service', 'shade-type'], required: true }, // এটি দিয়ে আলাদা করবেন
  slug: {
    type: String,
    required: [true, 'Slug is required'],
    unique: true, // URL ফ্রেন্ডলি করার জন্য এটি ইউনিক হওয়া ভালো
    lowercase: true,
    trim: true
  },
  banerImg: {
    type: String,
    required: [true, 'Banner image URL is required'],
    trim: true
  },
  headline: {
    type: String,
    required: [true, 'Headline is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Description is required']
  },
  extraIMGs: {
    type: [String], // স্ট্রিং-এর অ্যারে (ইমেজের URL বা পাথ রাখার জন্য)
    validate: {
      validator: function(array) {
        // এখানে নিশ্চিত করা হচ্ছে যেন অ্যারেতে ঠিক ৮টি উপাদানই থাকে
        return array.length === 8;
      },
      message: 'The extraIMGs field must contain exactly 8 images.'
    },
    required: [true, 'Exactly 8 extra images are required']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('ProductService', ProductServiceSchema);