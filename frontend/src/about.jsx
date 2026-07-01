
import WhyChooseUs from './WhyChooseUs'

function about() {
  return (
    <section>
        <div className='text-4xl font-bold  text-white text-center bg-[#002951] p-4 py-10 mb-4'>About US</div>

        <section className="w-full bg-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Title Area with Golden Underline */}
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#222222] text-center mb-3">
            About Layali Car Parking
          </h2>
          {/* টাইটেলের নিচের সেই সিগনেচার গোল্ডেন আন্ডারলাইন */}
          <div className="w-20 h-0.5 bg-[#b28e36]"></div>
        </div>

        {/* Content Grid: Left Image, Right Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* Left Column: Image with Rounded Corners & Shadow */}
          <div className="w-full h-auto rounded-xl overflow-hidden shadow-lg border border-gray-100">
            <img 
              src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=800" // এখানে আপনার আসল পার্কিং শেডের ছবির পাথ বসিয়ে দেবেন
              alt="Layali Car Parking Shade Structure" 
              className="w-full h-full object-cover aspect-[4/3] lg:aspect-auto"
            />
          </div>

          {/* Right Column: Paragraphs */}
          <div className="space-y-6 text-gray-600 text-sm md:text-base leading-relaxed tracking-wide">
            <p>
              Layali Car Parking is a premier car parking shade manufacturer and supplier based in the UAE. 
              With years of experience in the shade structure industry, we have established ourselves as a 
              trusted name for quality car parking shade solutions across Dubai, Sharjah, Abu Dhabi, Ajman, 
              and all Emirates.
            </p>
            
            <p>
              We specialize in the design, fabrication, and installation of all types of car parking shades 
              including cantilever shades, pyramid shades, sail shades, arch shades, umbrella shades, and 
              tensile structures. Our products are manufactured using the highest quality steel, aluminum, 
              and HDPE/PVC fabric materials that are built to withstand the extreme UAE weather conditions.
            </p>
            
            <p>
              Our state-of-the-art manufacturing facility is equipped with the latest machinery and technology, 
              enabling us to produce shade structures that meet international quality standards. Every project 
              is handled by our team of skilled engineers, designers, and installation experts who ensure 
              precision and excellence at every stage.
            </p>
          </div>

        </div>

      </div>
    </section>

<WhyChooseUs />
    </section>
  )
}

export default about