import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// সলিড আইকন ইমপোর্ট
import { faPhone, faEnvelope, faMapMarkerAlt, faBriefcase } from "@fortawesome/free-solid-svg-icons";
// ব্র্যান্ডের লোগো আইকন ইমপোর্ট
import { 
  faFacebookF, 
  faWhatsapp, 
  faLinkedinIn, 
  faInstagram, 
  faYoutube, 
  faTiktok, 
  faXTwitter 
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  
  // উপরের বড় সোশ্যাল মিডিয়া ব্যানারের ডেটা অ্যারে
  const topSocials = [
    { icon: faLinkedinIn, bg: "bg-sky-600", url: "#" },
    { icon: faWhatsapp, bg: "bg-green-500", url: "https://wa.me/971562388440" },
    { icon: faLinkedinIn, bg: "bg-sky-600", url: "#" }, // প্রথম আইকনটি আপনার ছবিতে প্রোফাইল টাইপ ছিল, এখানে লিংকডইন সেট করা হয়েছে
    { icon: faFacebookF, bg: "bg-blue-600", url: "#" },
    { icon: faInstagram, bg: "bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-600", url: "#" },
    { icon: faYoutube, bg: "bg-red-600", url: "#" },
    { icon: faTiktok, bg: "bg-black border border-white/10", url: "#" },
    { icon: faXTwitter, bg: "bg-black border border-white/10", url: "#" }
  ];

  // নিচের "Get In Touch" এর গোল ছোট আইকনগুলোর ডেটা অ্যারে
  const bottomSocials = [
    { icon: faLinkedinIn, url: "#" },
    { icon: faFacebookF, url: "#" },
    { icon: faInstagram, url: "#" },
    { icon: faYoutube, url: "#" },
    { icon: faTiktok, url: "#" },
    { icon: faWhatsapp, url: "https://wa.me/971562388440" }
  ];

  return (
    <footer className="w-full bg-[#002244] text-white  mt-10 font-sans">
      
      {/* ==================== 1. TOP CTA & SOCIAL BANNER ==================== */}
      <div className="w-full border-b border-amber-500/30 py-10 px-4 text-center">
        <div className="max-w-6xl mx-auto space-y-6">
          
          {/* Top Headline */}
          <p className="text-amber-400 font-semibold text-xs md:text-sm tracking-wide max-w-3xl mx-auto">
            Contact our shade specialist team today for a free, no-obligation quote, or click the button to get quotation.
          </p>

          {/* Call, Button, Email Row */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 py-2">
            {/* Call Action */}
            <div className="flex flex-col items-center md:items-end">
              <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">CALL US NOW ON</span>
              <a href="tel:+971562388440" className="text-lg md:text-xl font-black tracking-wide hover:text-amber-400 transition-colors mt-0.5">
                +971 56 238 8440
              </a>
            </div>

            {/* Middle Quote Button */}
            <Link 
              to="/contact-us" 
              className="bg-[#b28e36] text-[#001122] font-extrabold text-xs tracking-widest uppercase px-8 py-3.5 rounded-full shadow-lg hover:bg-white hover:text-[#002244] transition-all duration-300"
            >
              Get Free Quote
            </Link>

            {/* Email Action */}
            <div className="flex flex-col items-center md:items-start">
              <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">E-MAIL US NOW ON</span>
              <a href="mailto:info@layalicarparking.com" className="text-lg md:text-xl font-black tracking-wide hover:text-amber-400 transition-colors mt-0.5">
                info@layalicarparking.com
              </a>
            </div>
          </div>

          {/* Social Media Row (Top) */}
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            {topSocials.map((social, i) => (
              <a 
                key={i} 
                href={social.url} 
                target="_blank" 
                rel="noreferrer"
                className={`w-10 h-10 flex items-center justify-center text-white text-base rounded-xl shadow-md ${social.bg} transform hover:-translate-y-1 transition-all duration-200`}
              >
                <FontAwesomeIcon icon={social.icon} />
              </a>
            ))}
          </div>

        </div>
      </div>

      {/* ==================== 2. MAIN FOOTER LINKS ==================== */}
      <div className="max-w-7xl mx-auto py-14 px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Column 1: Quick Links */}
        <div>
          <h4 className="text-sm font-black uppercase tracking-wider text-white border-b-2 border-amber-500 w-fit pb-1 mb-6">
            Quick Links
          </h4>
          <ul className="space-y-3.5 text-xs font-semibold text-gray-300">
            {[
              { name: "About Us", path: "/about-us" },
              { name: "Our Services", path: "/services" },
              { name: "Projects", path: "/projects" },
              { name: "Contact Us", path: "/contact-us" }
            ].map((link, idx) => (
              <li key={idx}>
                <Link to={link.path} className="hover:text-amber-400 flex items-center gap-1.5 transition-colors group">
                  <span className="text-amber-500/70 group-hover:text-amber-400 text-[10px]">›</span> {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2: Our Products */}
        <div>
          <h4 className="text-sm font-black uppercase tracking-wider text-white border-b-2 border-amber-500 w-fit pb-1 mb-6">
            Our Products
          </h4>
          <ul className="space-y-3.5 text-xs font-semibold text-gray-300">
            {[
              "Cantilever Parking Shades",
              "Tensile Shade Structures",
              "Pyramid Parking Shades",
              "Sail Parking Shades",
              "Umbrella Parking Shades",
              "HDPE Parking Shades"
            ].map((prod, idx) => (
              <li key={idx}>
                <Link to={`/products/${prod.toLowerCase().replace(/ /g, "-")}`} className="hover:text-amber-400 flex items-center gap-1.5 transition-colors group">
                  <span className="text-amber-500/70 group-hover:text-amber-400 text-[10px]">›</span> {prod}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Head Office */}
        <div className="space-y-5">
          <h4 className="text-sm font-black uppercase tracking-wider text-white border-b-2 border-amber-500 w-fit pb-1 mb-6">
            Head Office
          </h4>
          <div className="space-y-4 text-xs font-semibold text-gray-300 leading-relaxed">
            <div className="flex items-start gap-3">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-amber-500 text-sm mt-0.5" />
              <p>Shop No- 5, Ajman Industrial Area -2, Ajman, UAE</p>
            </div>
            <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={faBriefcase} className="text-amber-500 text-sm" />
              <p>License No- 12721</p>
            </div>
          </div>
        </div>

        {/* Column 4: Get In Touch */}
        <div>
          <h4 className="text-sm font-black uppercase tracking-wider text-white border-b-2 border-amber-500 w-fit pb-1 mb-6">
            Get In Touch
          </h4>
          <div className="space-y-4 text-xs font-semibold text-gray-300">
            <a href="tel:+971562388440" className="flex items-center gap-3 hover:text-amber-400 transition-colors">
              <FontAwesomeIcon icon={faPhone} className="text-amber-500 text-sm" /> +971 56 238 8440
            </a>
            <a href="mailto:info@layalicarparking.com" className="flex items-center gap-3 hover:text-amber-400 transition-colors truncate block">
              <FontAwesomeIcon icon={faEnvelope} className="text-amber-500 text-sm" /> info@layalicarparking.com
            </a>

            {/* Circular Mini Social Icons (Bottom) */}
            <div className="flex items-center gap-2 pt-3">
              {bottomSocials.map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-500 text-gray-400 hover:text-white hover:border-amber-400 hover:bg-amber-500/10 text-xs transition-all"
                >
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* ==================== 3. COPYRIGHT BOTTOM BAR ==================== */}
      <div className="w-full bg-[#001b38] py-5 px-4 text-center text-[11px] text-gray-400 border-t border-white/5 font-medium space-y-1">
        <p>© 2026 Layali Car Parking Shades & Structures LLC in Sharjah, Dubai, Abu Dhabi, UAE | All rights reserved.</p>
        <p className="text-gray-500">
          Designed & Developed by <a href="#" className="text-sky-400 hover:underline">Virtual Online</a>
        </p>
      </div>

    </footer>
  );
}