import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // একটি কমন স্টাইল ফাংশন
  const navLinkStyle = ({ isActive }) =>
    `text-sm font-semibold tracking-wide uppercase transition-colors duration-200 py-2 ${
      isActive
        ? "text-amber-500" // Desktop Active (no border)
        : "text-white hover:text-amber-500"
    }`;

  return (
    <header className="w-full bg-white font-sans">
      {/* Top Header - Logo and Contact Info (Hidden on very small mobile) */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo Section */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#003366] leading-none">
            Layali Car Parking
          </h1>
          <p className="text-xs font-bold text-gray-500 tracking-wider uppercase mt-1">
            Bait Al Layali Metal and Iron Works
          </p>
        </div>

        {/* Contact and CTA Info */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
          {/* Phone */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#003366] flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a12.035 12.035 0 0 1-7.108-7.108c-.145-.44.02-1.27.395-1.551l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium uppercase leading-none">Call Us</p>
              <a href="tel:+971562388440" className="text-sm font-bold text-gray-800 hover:text-[#003366]">+971 56 238 8440</a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#003366] flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0l-7.5-4.615m19.5 0A2.25 2.25 0 0 0 19.5 6.75" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium uppercase leading-none">Mail Us</p>
              <a href="mailto:info@layalicarparking.com" className="text-sm font-bold text-gray-800 hover:text-[#003366]">info@layalicarparking.com</a>
            </div>
          </div>

          {/* Request Button */}
          <Link
            to="/quotation"
            className="bg-[#003366] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full hover:bg-amber-500 hover:text-white transition-all duration-300 shadow-md"
          >
            Request For Quotation
          </Link>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <nav className="w-full bg-[#003366] text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex justify-between md:justify-center items-center h-14">
          
          {/* Mobile Menu Text / Brand (Visible on mobile only) */}
          <span className="md:hidden font-bold tracking-wide uppercase text-sm">Layali</span>

          {/* Hamburger Menu Icon for Mobile */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden p-2 rounded-md hover:bg-[#002244] focus:outline-none transition-colors"
            aria-label="Open Menu"
          >
            {/* Hamburger Icon */}
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-10 h-full">
            {/* active state-এর জন্য আলাদা border class যোগ করছি, কারণ মোবাইল আর ডেস্কটপে আলাদা আচরণ*/}
            <NavLink to="/" className={navLinkStyle}>{({ isActive }) => <span className={isActive ? "border-b-2 border-amber-500 pb-2 md:pb-1" : "pb-2 md:pb-1"}>Home</span>}</NavLink>
            <NavLink to="/about-us" className={navLinkStyle}>{({ isActive }) => <span className={isActive ? "border-b-2 border-amber-500 pb-2 md:pb-1" : "pb-2 md:pb-1"}>About Us</span>}</NavLink>
            <NavLink to="/services" className={navLinkStyle}>{({ isActive }) => <span className={isActive ? "border-b-2 border-amber-500 pb-2 md:pb-1" : "pb-2 md:pb-1"}>Services</span>}</NavLink>
            <NavLink to="/gallery" className={navLinkStyle}>{({ isActive }) => <span className={isActive ? "border-b-2 border-amber-500 pb-2 md:pb-1" : "pb-2 md:pb-1"}>Gallery</span>}</NavLink>
            <NavLink to="/contact-us" className={navLinkStyle}>{({ isActive }) => <span className={isActive ? "border-b-2 border-amber-500 pb-2 md:pb-1" : "pb-2 md:pb-1"}>Contact Us</span>}</NavLink>
          </div>
        </div>

{/* ========================================================= */}
{/* Mobile Navigation Drawer (Right Side) */}
{/* ========================================================= */}

{/* 1. Backdrop Overlay */}
<div 
  className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} 
  onClick={() => setIsOpen(false)}
  aria-hidden="true"
/>

{/* 2. Side Drawer Content */}
<div className={`fixed inset-y-0 right-0 z-50 w-80 h-screen bg-[#002b55] text-white shadow-2xl md:hidden transform transition-transform duration-300 ease-in-out flex flex-col ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
  
  {/* Drawer Header */}
  <div className="flex items-center justify-between p-5 border-b border-blue-900/50 bg-[#002244]">
    <div>
      <h2 className="font-extrabold text-lg tracking-wide text-white leading-none">Layali Car Parking</h2>
      <p className="text-[10px] font-semibold text-amber-500 tracking-wider uppercase mt-1">Menu Navigation</p>
    </div>
    <button
      onClick={() => setIsOpen(false)}
      className="p-2 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none transition-colors"
      aria-label="Close Menu"
    >
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>

  {/* Drawer Links (Beautifully Styled with Icons) */}
  <div className="flex-grow p-5 space-y-2 overflow-y-auto">
    
    {/* Home Link */}
    <NavLink 
      to="/" 
      onClick={() => setIsOpen(false)} 
      className={({ isActive }) => `flex items-center gap-4 px-4 py-3.5 rounded-xl font-medium tracking-wide transition-all duration-200 border-l-4 ${isActive ? "bg-amber-500/10 border-amber-500 text-amber-500 font-bold" : "border-transparent text-gray-200 hover:bg-white/5 hover:text-white"}`}
    >
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>
      <span>Home</span>
    </NavLink>

    {/* About Us Link */}
    <NavLink 
      to="/about-us" 
      onClick={() => setIsOpen(false)} 
      className={({ isActive }) => `flex items-center gap-4 px-4 py-3.5 rounded-xl font-medium tracking-wide transition-all duration-200 border-l-4 ${isActive ? "bg-amber-500/10 border-amber-500 text-amber-500 font-bold" : "border-transparent text-gray-200 hover:bg-white/5 hover:text-white"}`}
    >
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" /></svg>
      <span>About Us</span>
    </NavLink>

    {/* Services Link */}
    <NavLink 
      to="/services" 
      onClick={() => setIsOpen(false)} 
      className={({ isActive }) => `flex items-center gap-4 px-4 py-3.5 rounded-xl font-medium tracking-wide transition-all duration-200 border-l-4 ${isActive ? "bg-amber-500/10 border-amber-500 text-amber-500 font-bold" : "border-transparent text-gray-200 hover:bg-white/5 hover:text-white"}`}
    >
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.68-.69-1.8-1-2.84-.74l-4.51 1.13a1 1 0 0 0-.73.73l1.13 4.51c.26 1.04.57 2.16 1.26 2.84A10.05 10.05 0 0 0 12 24a10.05 10.05 0 0 0 7.34-3.16c.69-.68 1-1.8.74-2.84l-1.13-4.51a1 1 0 0 0-.73-.73l-4.51 1.13c-1.04.26-2.16.57-2.84-1.26Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" /></svg>
      <span>Services</span>
    </NavLink>

    {/* Gallery Link */}
    <NavLink 
      to="/gallery" 
      onClick={() => setIsOpen(false)} 
      className={({ isActive }) => `flex items-center gap-4 px-4 py-3.5 rounded-xl font-medium tracking-wide transition-all duration-200 border-l-4 ${isActive ? "bg-amber-500/10 border-amber-500 text-amber-500 font-bold" : "border-transparent text-gray-200 hover:bg-white/5 hover:text-white"}`}
    >
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375 0 1 1-.75 0 .375 0 0 1 .75 0Z" /></svg>
      <span>Gallery</span>
    </NavLink>

    {/* Contact Us Link */}
    <NavLink 
      to="/contact-us" 
      onClick={() => setIsOpen(false)} 
      className={({ isActive }) => `flex items-center gap-4 px-4 py-3.5 rounded-xl font-medium tracking-wide transition-all duration-200 border-l-4 ${isActive ? "bg-amber-500/10 border-amber-500 text-amber-500 font-bold" : "border-transparent text-gray-200 hover:bg-white/5 hover:text-white"}`}
    >
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501c1.153-.086 2.294-.213 3.423-.379 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" /></svg>
      <span>Contact Us</span>
    </NavLink>

  </div>

  {/* Drawer Footer - Contact Info Cards */}
  <div className="p-5 border-t border-blue-900/50 bg-[#002244] space-y-3.5">
    
    {/* Quick Contact Header */}
    <p className="text-[11px] font-bold tracking-wider text-blue-400 uppercase">Quick Contact</p>

    {/* Phone Support */}
    <a href="tel:+971562388440" className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
      <span className="text-amber-500">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a12.035 12.035 0 0 1-7.108-7.108c-.145-.44.02-1.27.395-1.551l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>
      </span>
      <span className="text-xs font-semibold text-gray-300">+971 56 238 8440</span>
    </a>

    {/* Email Support */}
    <a href="mailto:info@layalicarparking.com" className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
      <span className="text-amber-500">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0l-7.5-4.615m19.5 0A2.25 2.25 0 0 0 19.5 6.75" /></svg>
      </span>
      <span className="text-xs font-semibold text-gray-300 truncate">info@layalicarparking.com</span>
    </a>

    {/* Copyright text */}
    <p className="text-[10px] text-center text-blue-300/60 pt-2">© 2026 Bait Al Layali Metal Works</p>
  </div>
</div>

      </nav>
    </header>
  );
}