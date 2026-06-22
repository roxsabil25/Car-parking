import { Link } from "react-router-dom";

export default function Products() {
  // এখানে প্রতিটি প্রোডাক্টের নাম এবং তার নির্দিষ্ট URL পাথ (slug) দেওয়া হলো
  const productList = [
    { name: "Car Parking Shade", path: "/car-parking-shade" },
    { name: "Pargola Shade", path: "/pargola-shade" },
    { name: "Swimming Pool Shade", path: "/swimming-pool-shade" },
    { name: "Mushroom Form", path: "/mushroom-form" },
    { name: "Awning Shade", path: "/awning-shade" },
    { name: "Boundary Wall", path: "/boundary-wall" },
    { name: "Baby Carpet", path: "/baby-carpet" },
    { name: "Decoration Shade", path: "/decoration-shade" },
    { name: "Aluminum Door Window", path: "/aluminum-door-window" },
    { name: "Private Parking Shade", path: "/private-parking-shade" },
    { name: "Arabic Muslim Setting", path: "/arabic-muslim-setting" },
    { name: "Fencing and Fence Paint", path: "/fencing-and-fence-paint" },
    { name: "Shade and Fence Supplier", path: "/shade-and-fence-supplier" },
  ];

  return (
    <section className="w-full bg-[#fcfcfc] py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#222222] tracking-wide mb-3">
            Product
          </h2>
          <div className="w-24 h-1 bg-[#ea7d1a] rounded-full"></div>
        </div>

        {/* Product Grid (HTML <ul> ট্যাগ ব্যবহার করা হয়েছে) */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {productList.map((product, index) => (
            <li key={index} className="w-full">
              {/* React Router এর Link ট্যাগ, যা ব্রাউজারে সুন্দর <a> ট্যাগ হিসেবেই রেন্ডার হবে */}
              <Link
                to={product.path}
                className="block bg-[#ea7d1a] text-white font-bold uppercase text-xs md:text-sm tracking-wider text-center 
                           py-4 px-6 rounded-lg shadow-[0_4px_6px_rgba(234,125,26,0.15)] 
                           transition-all duration-300 ease-in-out 
                           hover:bg-[#d66c13] hover:shadow-[0_6px_12px_rgba(214,108,19,0.3)] 
                           hover:-translate-y-0.5"
              >
                {product.name}
              </Link>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}