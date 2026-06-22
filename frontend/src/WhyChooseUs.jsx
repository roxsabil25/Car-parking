import { Link } from "react-router-dom";

export default function WhyChooseUs() {
  // ছবির ভেতরের ৪টি স্ট্যাটস (Stats) ডেটা
  const stats = [
    { number: "15+", label: "YEARS IN BUSINESS" },
    { number: "300+", label: "HAPPY CLIENTS" },
    { number: "9", label: "EMIRATES SERVED" },
    { number: "500+", label: "QUALITY PROJECTS" },
  ];

  return (
    <section className="w-full bg-[#003366] text-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Title Section */}
        <div className="flex flex-col items-center mb-6">
          <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-wider mb-3">
            Why Choose Us?
          </h2>
          {/* টাইটেলের নিচের সেই গোল্ডেন কালার আন্ডারলাইনটি */}
          <div className="w-20 h-0.5 bg-[#b28e36]"></div>
        </div>

        {/* Description Paragraph */}
        <p className="max-w-4xl mx-auto text-gray-200 text-sm md:text-base leading-relaxed tracking-wide mb-14 px-2">
          Unlike other car parking shades companies in Dubai or UAE, our determined team of expertise has embarked us to cover almost any type of industry to work with in their field projects. Be it residential, commercial, or industrial, we will provide authentic work of car parking shade structures.
        </p>

        {/* Stats Grid */}
        {/* মোবাইলে ২ কলাম এবং ট্যাবলেটে/ডেস্কটপে ৪ কলামে চমৎকারভাবে বর্ডারসহ শো করবে */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 items-center justify-center mb-14">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center justify-center px-4 ${
                // শেষ আইটেম বাদে বাকিগুলোর ডান পাশে ডেস্কটপে সাদা বর্ডার (Vertical Divider) থাকবে
                index !== stats.length - 1 ? "md:border-r md:border-white/20" : ""
              }`}
            >
              {/* গোল্ডেন কালার নাম্বার */}
              <span className="text-4xl md:text-5xl font-black text-[#b28e36] tracking-tight mb-2">
                {stat.number}
              </span>
              {/* টেক্সট লেবেল */}
              <span className="text-[11px] md:text-xs font-bold tracking-widest text-gray-300 uppercase text-center">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex justify-center">
          <Link
            to="/quotation"
            className="bg-[#b28e36] text-[#001122] text-xs md:text-sm font-bold uppercase tracking-widest px-10 py-4 rounded-full shadow-lg hover:bg-white hover:text-[#003366] transition-all duration-300"
          >
            Get Quotation Now
          </Link>
        </div>

      </div>
    </section>
  );
}