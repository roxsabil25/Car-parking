import { useParams, Link } from 'react-router-dom';
// ১. এখানে mainServices এর সাথে shadeTypes ও ইমপোর্ট করলাম
import { mainServices, shadeTypes } from './data'; 
import ServicesGrid from './ServicesGrid';

function ServiceDetails() {
  const { slug } = useParams(); // App.jsx এ :slug ফিক্স করার পর এখানে slug পাবেন
  
  // ২. দুটি ডাটার অ্যারেকে একসাথে মিশিয়ে একটি বড় অ্যারে বানালাম
  const allData = [...mainServices, ...shadeTypes];

  // এখন allData (সব ডাটা) থেকে সঠিক কার্ডের slug-টি খুঁজে বের করছি
  const service = allData.find(item => item.slug === slug);

  if (!service) {
    return <div className="text-center py-20 text-xl font-bold">Service Not Found!</div>;
  }

  return (
    <div>
      <div className="bg-gray-50 min-h-screen font-sans">
      {/* টপ ডার্ক ব্লু ব্যানার */}
      <div className="bg-[#002244] text-white py-12 text-center uppercase">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide mb-2">{service.title}</h1>
        <p className="text-xs text-gray-300">
          <Link to="/" className="text-[#eab308] hover:underline">Home</Link> / {service.title}
        </p>
      </div>

      {/* মেইন কন্টেন্ট এরিয়া */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* বড় ইমেজ কন্টেইনার */}
        <div className="relative rounded-xl overflow-hidden shadow-lg mb-8">
          <img src={service.img} alt={service.title} className="w-full h-[450px] object-cover" />
          <button className="absolute top-4 right-4 bg-[#eab308] hover:bg-[#dca507] text-[#002244] font-bold text-xs px-4 py-2 uppercase tracking-wider rounded shadow-md transition-colors">
            Request For Quote
          </button>
        </div>

        {/* টেক্সট সেকশন */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 space-y-6">
          <div>
            <h2 className="text-2xl font-extrabold text-[#002244] mb-1">{service.title}</h2>
            {/* এখানে একটা গার্ড বা শর্ট সার্কিট দিলাম যাতে subtitle না থাকলে ক্র্যাশ না করে */}
            <p className="text-[#003366] font-semibold text-sm md:text-base">{service.subtitle || "Premium Service Provider UAE"}</p>
            <div className="w-full h-[1px] bg-gray-200 mt-4"></div>
          </div>

          <p className="text-gray-800 font-bold text-sm md:text-base leading-relaxed">
            {service.shortDesc || "High-quality custom design shades for premium installations across UAE."}
          </p>

          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            {service.longDesc || "We provide durable, climate-adaptive structures using top-grade materials."}
          </p>

          {/* নিচের হলুদ বাটন */}
          <div className="pt-4">
            <button className="bg-[#eab308] hover:bg-[#dca507] text-[#002244] font-extrabold text-xs md:text-sm px-6 py-3 uppercase tracking-wider rounded shadow-md transition-all">
              Request For Quote
            </button>
          </div>
        </div>
      </div>
    </div>
    {/* ১. এখানে মেইন সার্ভিসের ডাটা এবং সেকশন টাইটেল প্রপস হিসেবে পাঠানো হলো */}
         <ServicesGrid services={mainServices} animation="fade-right" />
   
         {/* ২. এখানে অন্য ডাটা এবং আলাদা সেকশন টাইটেল প্রপস হিসেবে পাঠানো হলো */}
         <ServicesGrid  services={shadeTypes} animation="fade-left" />
    </div>
  );
}

export default ServiceDetails;