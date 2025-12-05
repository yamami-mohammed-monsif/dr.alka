import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

interface CTAProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const CTABtn = ({ children, className, onClick }: CTAProps) => {
  return (
    <div>
      <button
        className={`${className} w-full md:w-auto bg-cta text-white text-sm sm:text-base flex items-center justify-center gap-2 px-5 md:px-8 py-4 rounded-full hover:bg-cta-hover hover:shadow-lg transition-colors duration-300 drop-shadow-lg`}
        onClick={onClick}
      >
        <Link
          href="https://wa.me/213667510454?text=Hello,%20I%20would%20like%20to%20book%20the%20Free%20Consultation."
          target="_blank"
          className="flex items-center gap-2"
        >
          {children}
          <FaWhatsapp size={20} className="hidden lg:block" />
        </Link>
      </button>
    </div>
  );
};

export default CTABtn;
