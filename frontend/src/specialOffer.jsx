
import QuoteBtn from './QuoteBtn';

const SpecialOfferBanner = () => {
  return (
    <div data-aos="fade-down" className="mt-5 bg-[#eab308] text-[#0f172a] p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6 font-sans">
      {/* বাম পাশের টেক্সট সেকশন */}
      <div className="space-y-4">
        <span className="text-xs uppercase tracking-widest font-bold opacity-80">
          SPECIAL OFFER
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#003366]">
          The Entire UAE — A Special & Discount Offer
        </h2>
        <ul className="space-y-2 text-sm md:text-base font-medium">
          <li className="flex items-center gap-2">
            <span className="text-[#003366] font-bold">✓</span>
            <span>Pay <strong className="font-bold">50%</strong> of the work in advance.</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[#003366] font-bold">✓</span>
            <span>The work will be delivered on time.</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[#003366] font-bold">✓</span>
            <span>Remaining <strong className="font-bold">50%</strong> can be paid monthly for up to <strong className="font-bold">6 months</strong>.</span>
          </li>
        </ul>
      </div>

      {/* ডান পাশের বাটন সেকশন */}
      <QuoteBtn />
      
    </div>
  );
};

export default SpecialOfferBanner;