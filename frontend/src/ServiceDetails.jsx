import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { mainServices, shadeTypes } from './data'; 
import ServicesGrid from './ServicesGrid';

function ServiceDetails() {
  const { slug } = useParams();
  
  // ১. লাইভ ডাটা ও রেন্ডারিং ট্র্যাকিংয়ের জন্য লোকাল স্টেট
  const [liveMainServices, setLiveMainServices] = useState(mainServices);
  const [liveShadeTypes, setLiveShadeTypes] = useState(shadeTypes);

  useEffect(() => {
    // ২. data.js-এ ব্যাকএন্ডের ডাটা আসার সাথে সাথে স্টেট আপডেট করার লিসেনার
    const handleLiveDataUpdate = () => {
      setLiveMainServices([...mainServices]);
      setLiveShadeTypes([...shadeTypes]);
    };

    window.addEventListener('liveDataUpdated', handleLiveDataUpdate);

    if (mainServices.length > 0) setLiveMainServices(mainServices);
    if (shadeTypes.length > 0) setLiveShadeTypes(shadeTypes);

    return () => window.removeEventListener('liveDataUpdated', handleLiveDataUpdate);
  }, []);

  // ৩. লাইভ স্টেট থেকে দুটি ডাটার অ্যারেকে একসাথে মিশিয়ে সঠিক সার্ভিসটি খুঁজে বের করা
  const allData = [...liveMainServices, ...liveShadeTypes];
  const service = allData.find(item => item.slug === slug);

  // ডাটা লোড হওয়ার আগ পর্যন্ত বা ডাটা না পাওয়া গেলে লোডিং/নট ফাউন্ড মেসেজ
  if (!service) {
    return (
      <div className="text-center py-24 text-xl font-bold text-[#002244]">
        {mainServices.length === 0 ? "Loading Service Details..." : "⚠️ Service Not Found!"}
      </div>
    );
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

        {/* মেইন কন্টেন্ট এরিয়া */}
        <div className="max-w-5xl mx-auto px-4 py-12">
          {/* বড় ইমেজ কন্টেইনার */}
          <div className="relative rounded-xl overflow-hidden shadow-lg mb-8">
            <img src={service.img} alt={service.title} className="w-full h-[450px] object-cover" />
            <button className="absolute top-4 right-4 bg-[#eab308] hover:bg-[#dca507] text-[#002244] font-bold text-xs px-4 py-2 uppercase tracking-wider rounded shadow-md transition-colors">
              Request For Quote
            </button>
          </div>

          {/* টেক্সট সেকশন */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 space-y-6 mb-12">
            <div>
              <h2 className="text-2xl font-extrabold text-[#002244] mb-1">{service.title}</h2>
              <p className="text-[#003366] font-semibold text-sm md:text-base">
                {service.headline || "Premium Service Provider UAE"}
              </p>
              <div className="w-full h-[1px] bg-gray-200 mt-4"></div>
            </div>

            {/* আপনার নতুন ডাইনামিক ডেসক্রিপশন স্ট্রাকচার */}
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              {service.description}
            </p>

            {/* নিচের হলুদ বাটন */}
            <div className="pt-2">
              <button className="bg-[#eab308] hover:bg-[#dca507] text-[#002244] font-extrabold text-xs md:text-sm px-6 py-3 uppercase tracking-wider rounded shadow-md transition-all">
                Request For Quote
              </button>
            </div>
          </div>

          {/* 📸 নতুন যুক্ত করা সেকশন: ৮টি এক্সট্রা ইমেজ গ্যালারি গ্রিড */}
          {service.extraIMGs && service.extraIMGs.length > 0 && (
            <div className="mb-16">
              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-extrabold text-[#002244]">
                  Our Project Gallery / Work Samples
                </h3>
                <p className="text-xs text-gray-500 mt-1">Real-time site photos of our finished {service.title} installations.</p>
                <div className="w-20 h-[3px] bg-[#eab308] mt-2"></div>
              </div>
              
              {/* ৪টি কলাম বিশিষ্ট রেসপনসিভ গ্রিড লেআউট */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {service.extraIMGs.map((imagePath, index) => (
                  <div 
                    key={index} 
                    className="group relative rounded-xl overflow-hidden shadow-sm border border-gray-200 bg-white aspect-square hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <img 
                      src={imagePath} 
                      alt={`${service.title} Sample ${index + 1}`} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* ইমেজ ওভারলে ইফেক্ট */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                      <span className="text-white text-xs font-semibold">Sample {index + 1}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>

      {/* নিচের সাজেস্টেড সার্ভিস গ্রিডসমূহ */}
      <ServicesGrid title="Our Main Services" services={liveMainServices} animation="fade-right" />
      <ServicesGrid title="Car Parking Shade Types" services={liveShadeTypes} animation="fade-left" />
    </div>
  );
}

export default ServiceDetails;