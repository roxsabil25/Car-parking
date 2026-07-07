
import { Link } from 'react-router-dom';

function ServicesGrid({ title, services, animation }) {
  return (
    <section className="py-16 bg-[#f8fafc] px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* মডার্ন হেডিং সেকশন */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight uppercase">
            {title}
          </h2>
          <div className="w-20 h-1.5 bg-[#eab308] mx-auto mt-3 rounded-full"></div>
        </div>
        
        {/* মডার্ন কার্ড গ্রিড */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {services?.map((item, index) => (
            <Link 
              to={`/services/${item.slug}`} 
              key={item.id || index} 
              className="block group" // 'group' ক্লাসটি হোভার ইফেক্টের জন্য খুব দরকারি
            >
              <div 
                data-aos={animation} 
                data-aos-delay={index * 100} 
                className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)] transition-all duration-300 border border-slate-100 flex flex-col h-full"
              >
                {/* ইমেজ কন্টেইনার (জুম ইফেক্ট সহ) */}
                <div className="relative overflow-hidden aspect-[4/3] bg-slate-100">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-out" 
                  />
                  {/* হোভার করলে হালকা ডার্ক ওভারলে আসবে */}
                  <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* টেক্সট ও বাটন সেকশন */}
                <div className="p-5 flex flex-col justify-between flex-grow bg-white">
                  <h3 className="font-extrabold text-slate-800 text-sm md:text-base leading-snug group-hover:text-[#003366] transition-colors duration-300 uppercase tracking-wide">
                    {item.title}
                  </h3>
                  
                  {/* ইউজার ফ্রেন্ডলি অ্যাকশন বাটন */}
                  <div className="mt-4 flex items-center text-xs font-bold text-[#003366] tracking-wider uppercase gap-1 group-hover:gap-2 transition-all duration-300">
                    <span>View Details</span>
                    <span className="text-[#eab308] text-sm transform group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ServicesGrid;