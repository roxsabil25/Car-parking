import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // যখনই ইউআরএল (pathname) চেঞ্জ হবে, ব্রাউজার স্ক্রলকে একদম উপরে (0,0) নিয়ে যাবে
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // এটি ব্যাকগ্রাউন্ডে কাজ করবে, তাই স্ক্রিনে কিছু দেখানোর দরকার নেই
}

export default ScrollToTop;