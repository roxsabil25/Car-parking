import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// AOS ইমপোর্ট করুন
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS এর CSS ফাইল

// AOS ইনিশিয়ালাইজ করুন (আপনি চাইলে এখানে গ্লোবাল কনফিগারেশনও দিতে পারেন)
AOS.init({
  duration: 1000, // অ্যানিমেশন কত মিলি-সেকেন্ড ধরে চলবে (১০০০ মি.সে. = ১ সেকেন্ড)
  once: true,     // স্ক্রল করে নিচে নামার সময় অ্যানিমেশন কি কেবল একবারই হবে? (true/false)
});


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
