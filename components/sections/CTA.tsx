"use client";

import Section from "../UI/Section";
import CTABtn from "../UI/CTABtn";
import Image from "next/image";
import useOnScreen from "@/hooks/useOnScreen";

const CTA = () => {
  const [sectionRef, isVisible] = useOnScreen({ threshold: 0.2 });
  return (
    <Section ref={sectionRef}>
      <div className="bg-[#1E6165] text-white rounded-lg overflow-hidden grid md:grid-cols-2 items-center">
        <div className="p-6 md:p-8">
          <h2
            className={`text-left! ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            Your New Smile <br /> Starts Here
          </h2>
          <p
            className={`section-description ${
              isVisible ? "animate-fade-in-up animate-delay-100" : "opacity-0"
            }`}
          >
            Chat directly with Dr. Alka and see what your smile could look like,
            limited slots available.
          </p>
          <CTABtn
            className={`bg-text mt-6 md:mt-8 hover:bg-[#1F3A47]! ${
              isVisible ? "animate-fade-in-up animate-delay-200" : "opacity-0"
            }`}
          >
            Book Your Free Smile Makeover Consultation
          </CTABtn>
        </div>
        <div>
          <Image
            src="/cta-img.webp"
            alt="dr. alka with a patinet in the office during consultation"
            width={955}
            height={588}
          />
        </div>
      </div>
    </Section>
  );
};

export default CTA;
