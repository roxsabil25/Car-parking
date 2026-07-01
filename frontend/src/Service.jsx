
import ServicesGrid from './ServicesGrid'
import { mainServices, shadeTypes } from './data';

export const Service = () => {
  return (
    <div>
        <div className=' mb-6 text-4xl font-bold  text-white text-center bg-[#002951] p-4 py-10 mb-4'>About US</div>
 {/* ১. এখানে মেইন সার্ভিসের ডাটা এবং সেকশন টাইটেল প্রপস হিসেবে পাঠানো হলো */}
      <ServicesGrid title="Car Parking Shade Services" services={mainServices} animation="fade-right" />

      {/* ২. এখানে অন্য ডাটা এবং আলাদা সেকশন টাইটেল প্রপস হিসেবে পাঠানো হলো */}
      <ServicesGrid title="Additional Shade Services" services={shadeTypes} animation="fade-left" />
    </div>
  )
}
