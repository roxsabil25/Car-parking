import Hero from './Hero'
import ServicesGrid from './ServicesGrid'
import WhyChooseUs from './WhyChooseUs'
import WhyChoose from './Why-Choose'
import SpecialOfferBanner from './specialOffer'

// data.js ফাইল থেকে ডাটাগুলো ইমপোর্ট করে নিলাম
// (ধরে নিচ্ছি mainServices এবং shadeTypes দুটিই data.js এ export করা আছে)
import { mainServices, shadeTypes } from './data';
import ProductList from './ProductList'

function Home() {
  return (
    <div>
      <Hero />
      <SpecialOfferBanner />

      <ProductList />
        
      {/* ১. এখানে মেইন সার্ভিসের ডাটা এবং সেকশন টাইটেল প্রপস হিসেবে পাঠানো হলো */}
      <ServicesGrid title="Our Main Services" services={mainServices} animation="fade-right" />

      {/* ২. এখানে অন্য ডাটা এবং আলাদা সেকশন টাইটেল প্রপস হিসেবে পাঠানো হলো */}
      <ServicesGrid title="Car Parking Shade Types" services={shadeTypes} animation="fade-left" />
      
      <WhyChooseUs />
      <WhyChoose />
      <SpecialOfferBanner />
    </div>
  )
}

export default Home;