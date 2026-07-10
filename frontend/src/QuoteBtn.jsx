import { Link } from "react-router-dom";

const QuoteBtn = () => {
  return (
          <div className="flex-shrink-0">
             <Link
            to="/contact-us"
            className="bg-[#003366] hover:bg-[#002244] text-white font-bold py-3 px-6 rounded shadow-md transition-colors tracking-wide text-sm md:text-base uppercase">
        
            Get A Quote Now
          </Link>

      </div>
  )
}

export default QuoteBtn