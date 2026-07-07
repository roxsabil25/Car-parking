import axios from 'axios';

// ১. শুরুতে খালি অ্যারে হিসেবে ডিক্লেয়ার করা যাতে ইম্পোর্ট করার সময় কোড ক্র্যাশ না করে
export let mainServices = [];
export let shadeTypes = [];

// ২. ব্যাকএন্ড থেকে লাইভ ডেটা ফেচ করার ফাংশন
const fetchLiveData = async () => {
  try {
    // আপনার ব্যাকএন্ড এপিআই ইউআরএল
    const res = await axios.get('https://car-parking-backend-o1oa.onrender.com/api/products');
    
    if (res.data.success) {
      const allData = res.data.data;

      // ব্যাকএন্ডের ইমেজ পাথগুলোকে পূর্ণাঙ্গ ইউআরএল-এ রূপান্তর এবং ম্যাপ করা
      const formattedData = allData.map((item, index) => ({
        id: item._id, // MongoDB ID কে id হিসেবে ম্যাপ করা হলো
        title: item.title,
        slug: item.slug,
        // ব্যাকএন্ডের /uploads/... পাথের আগে লোকালহোস্ট ডোমেইন জুড়ে দেওয়া হচ্ছে
        img: `https://car-parking-backend-o1oa.onrender.com${item.banerImg}`, 
        headline: item.headline,
        description: item.description,
        category: item.category,
        extraIMGs: item.extraIMGs.map(img => `https://car-parking-backend-o1oa.onrender.com${img}`)
      }));

      // ক্যাটাগরি অনুযায়ী ফিল্টার করে গ্লোবাল ভ্যারিয়েবলে ডেটা পুশ করা
      mainServices = formattedData.filter(item => item.category === 'main-service');
      shadeTypes = formattedData.filter(item => item.category === 'shade-type');

      // অন্য পেজগুলোকে ডেটা আপডেটের সিগন্যাল দেওয়ার জন্য একটি কাস্টম ইভেন্ট ট্রিগার করা (সেফটি মেজার)
      window.dispatchEvent(new Event('liveDataUpdated'));
    }
  } catch (error) {
    console.error("❌ Error fetching data from backend in data.js:", error.message);
  }
};

// ফাংশনটি সাথে সাথে রান করানো হচ্ছে
fetchLiveData();