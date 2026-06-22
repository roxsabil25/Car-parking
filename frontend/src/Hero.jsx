import { useState, useEffect } from "react";

export default function Hero() {
  // ৫টি ইমেজের লিংক বা পাথ
  const images = [
    "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1200", 
    "https://images.unsplash.com/photo-1590674899484-d5640e854abe?q=80&w=1200", 
    "https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?q=80&w=1200", 
    "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=1200", 
    "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=1200", 
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // ৩ সেকেন্ড পর পর অটো স্লাইড হওয়ার লজিক
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    // এখানে h-[50vh] (মোবাইলের জন্য) এবং md:h-[65vh] (ডেস্কটপের জন্য) সুন্দর একটি হাইট দেওয়া হয়েছে
    <section className="w-full h-[40vh] sm:h-[50vh] md:h-[65vh] bg-[#001122] text-white overflow-hidden relative">
      
      {/* স্লাইড কন্টেইনার */}
      <div 
        className="flex h-full w-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((imgSrc, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            <img 
              src={imgSrc} 
              alt={`Car Parking Slide ${index + 1}`} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* স্লাইডার ডট ইন্ডিকেটরস */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-2 bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              currentIndex === index ? "w-6 bg-amber-500" : "w-2.5 bg-gray-400/70 hover:bg-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* UAE ব্যাজ বা লোগো (যেমনটি Capture.jpg ইমেজে ছিল) */}
      <div className="absolute bottom-4 right-4 hidden sm:flex flex-col items-center bg-[#002244]/80 px-4 py-2 rounded border border-amber-500/30 text-center backdrop-blur-sm z-10">
        <span className="text-[10px] font-bold text-amber-400 tracking-widest uppercase">Layali</span>
        <span className="text-xs font-black tracking-widest text-white mt-0.5">UAE</span>
      </div>

    </section>
  );
}