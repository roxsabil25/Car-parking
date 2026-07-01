
import { Link } from 'react-router-dom';
// data.js থেকে দুটি ডাটাই ইমপোর্ট করলাম
import { mainServices, shadeTypes } from './data'; 

function ProductList() {
  // দুটি অ্যারের ডাটা একসাথে মিশিয়ে ফেললাম যাতে সব প্রোডাক্ট এক জায়গায় চলে আসে
  const allProducts = [...mainServices, ...shadeTypes];

  return (
    <section className="py-12 bg-[#f8fafc] px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* সেকশন হেডার */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-slate-800 tracking-tight uppercase">
            Our Products Quick Links
          </h2>
          <div className="w-16 h-1 bg-[#eab308] mx-auto mt-2 rounded-full"></div>
        </div>

        {/* ডাইনামিক গ্রিড বাটন লিস্ট */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {allProducts.map((product, index) => (
            <Link 
              to={`/services/${product.slug}`} 
              key={product.id || index}
              className="block"
            >
              {/* স্ক্রিনশটের মতো অরেঞ্জ গ্রেডিয়েন্ট এবং মডার্ন হোভার ইফেক্ট */}
              <div className="bg-[#EB7611]  hover:from-orange-600 hover:to-orange-700 text-white font-extrabold text-center text-xs md:text-sm py-4 px-6 uppercase tracking-wider rounded-xl shadow-md hover:shadow-xl active:scale-95 transform transition-all duration-200 cursor-pointer border border-orange-400/20 flex items-center justify-center min-h-[56px]">
                {product.title}
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ProductList;