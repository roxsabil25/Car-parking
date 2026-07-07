import { useState, useEffect } from 'react';
import ServicesGrid from './ServicesGrid';
import { mainServices, shadeTypes } from './data'; // ডাটা ফাইল ইম্পোর্ট

export const Service = () => {
  // ১. ডাটাগুলো ট্র্যাক করার জন্য লোকাল স্টেট তৈরি করা হলো
  const [liveMainServices, setLiveMainServices] = useState(mainServices);
  const [liveShadeTypes, setLiveShadeTypes] = useState(shadeTypes);

  useEffect(() => {
    // ২. যদি data.js ফাইলে ডেটা লোড হতে কয়েক মিলি-সেকেন্ড দেরি হয়, 
    // তবে ডেটা আসার সাথে সাথে এই কাস্টম ইভেন্টটি স্টেট আপডেট করে দেবে
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
      <div className='mb-6 text-4xl font-bold text-white text-center bg-[#002951] p-4 py-10 mb-4'>
        About US
      </div>

      {/* ৪. এখানে স্ট্যাটিক ভ্যারিয়েবলের বদলে আমাদের লোকাল স্টেট পাস করা হলো */}
      <ServicesGrid 
        title="Car Parking Shade Services" 
        services={liveMainServices} 
        animation="fade-right" 
      />

      <ServicesGrid 
        title="Additional Shade Services" 
        services={liveShadeTypes} 
        animation="fade-left" 
      />
    </div>
  );
};