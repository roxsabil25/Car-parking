import { Link } from "react-router-dom";

export default function ServicesGrid({ hideTitle = false }) {
  // ছবি Capture_2.jpg অনুযায়ী সার্ভিসের ডেটা এবং তাদের ইউনিক আইডি (slug)
  const services = [
    { title: "CAR PARKING SHADE", slug: "car-parking-shade", img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=400" },
    { title: "PARGOLA SHADE", slug: "pargola-shade", img: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?q=80&w=400" },
    { title: "ALUMINIUM PARABOLA SHADE", slug: "aluminium-parabola-shade", img: "https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?q=80&w=400" },
    { title: "VIP ARABIC MAJLIS SEATING", slug: "vip-arabic-majlis-seating", img: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=400" },
    { title: "SWIMMING POOL AREA", slug: "swimming-pool-area", img: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=400" },
    { title: "SANDWICH PANEL SHADE", slug: "sandwich-panel-shade", img: "https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?q=80&w=400" },
    { title: "BOUNDARY WALL SHADE", slug: "boundary-wall-shade", img: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=400" },
    { title: "HOUSE PAINT", slug: "house-paint", img: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=400" },
  ];

  return (
    <section className="w-full bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">


{!hideTitle && (
          <h2 className="text-3xl font-extrabold text-[#222222] text-center mb-10  tracking-wide">
           Our Main Services

          </h2>
        )}
        
        {/* ৪ কলামের রেসপন্সিভ গ্রিড (Capture_2.jpg এর মতো কার্ড ডিজাইন) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link 
              to={`/services/${service.slug}`} 
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden block transition-transform duration-300 hover:-translate-y-2 group"
            >
              <div className="h-52 w-full overflow-hidden">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-sm font-bold text-[#003366] tracking-wide uppercase group-hover:text-amber-500 transition-colors">
                  {service.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </section>
  );
}