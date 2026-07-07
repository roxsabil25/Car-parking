import { useState, useEffect } from 'react';
import Hero from './Hero';
import ServicesGrid from './ServicesGrid';
import WhyChooseUs from './WhyChooseUs';
import WhyChoose from './Why-Choose';
import SpecialOfferBanner from './specialOffer';
import ProductList from './ProductList';

// data.js ফাইল থেকে ডাটাগুলো ইমপোর্ট করে নিলাম
import { mainServices, shadeTypes } from './data';

function Home() {
  // ১. লাইভ ডাটা ট্র্যাক করার জন্য লোকাল স্টেট তৈরি করা হলো
  const [liveMainServices, setLiveMainServices] = useState(mainServices);
  const [liveShadeTypes, setLiveShadeTypes] = useState(shadeTypes);

  useEffect(() => {
    // ২. data.js ফাইলে ব্যাকএন্ডের ডাটা আপডেট হওয়া মাত্রই এই ইভেন্টটি ফায়ার হবে এবং স্টেট আপডেট করবে
    const handleLiveDataUpdate = () => {
      setLiveMainServices([...mainServices]);
      setLiveShadeTypes([...shadeTypes]);
    };

    window.addEventListener('liveDataUpdated', handleLiveDataUpdate);

    // ৩. যদি কম্পোনেন্ট মাউন্ট হওয়ার আগেই ডেটা চলে আসে, তবে সরাসরি স্টেট সেট হবে
    if (mainServices.length > 0) setLiveMainServices(mainServices);
    if (shadeTypes.length > 0) setLiveShadeTypes(shadeTypes);

    // ক্লিনআপ লিসেনার
    return () => window.removeEventListener('liveDataUpdated', handleLiveDataUpdate);
  }, []);

  return (
    <div>
      <Hero />
      <SpecialOfferBanner />

      <ProductList />
        
      {/* 🌟 ৪. এখানে স্ট্যাটিক ভ্যারিয়েবলের বদলে আমাদের লোকাল লাইভ স্টেট প্রপস হিসেবে পাঠানো হলো */}
      <ServicesGrid title="Our Main Services" services={liveMainServices} animation="fade-right" />

      {/* 🌟 ৫. এখানেও লাইভ স্টেট পাঠানো হলো */}
      <ServicesGrid title="Car Parking Shade Types" services={liveShadeTypes} animation="fade-left" />
      
      <WhyChooseUs />
      <WhyChoose />
      <SpecialOfferBanner />
    </div>
  );
}

export default Home;