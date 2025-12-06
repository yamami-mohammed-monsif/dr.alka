"use client";

import Section from "../UI/Section";
import { BenefitsData } from "@/constants";
import BenefitCard from "../UI/BenefitCard";
import Image from "next/image";
import useOnScreen from "@/hooks/useOnScreen";

const Benefits = () => {
  const leftColumnBenefits = BenefitsData.slice(0, 2);
  const rightColumnBenefits = BenefitsData.slice(2, 4);

  const [sectionRef, isVisible] = useOnScreen({ threshold: 0.2 });

  // Helper function to get the correct delay class
  const getDelayClass = (index: number, baseOffset: number) => {
    const delay = (index + baseOffset) * 100;
    return `animate-delay-${delay}`;
  };

  return (
    <Section ref={sectionRef} className="bg-bg py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12 md:mb-16">
          <h2 className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            Why Start with a Free Smile Makeover Consultation?
          </h2>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-10 lg:gap-8 items-center">
          {/* --- LEFT COLUMN --- */}
          <div className="flex flex-col gap-10 md:gap-14 order-1 w-full">
            {leftColumnBenefits.map((benefit, index) => (
              <div
                key={benefit.id}
                className={`animate-fade-in-up ${getDelayClass(index, 1)}`}
              >
                <BenefitCard {...benefit} />
              </div>
            ))}
          </div>

          {/* --- CENTER IMAGE --- */}
          <div className="order-3 lg:order-2 w-full flex justify-center animate-fade-in-up animate-delay-300">
            <div className="relative w-full max-w-[350px] lg:max-w-full aspect-square rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/happy-dental-patient.jpeg"
                alt="a happy dental patient sitting on dental chair looking at mirror happy with her new smile"
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
              />
            </div>
          </div>

          {/* --- RIGHT COLUMN --- */}
          <div className="flex flex-col gap-10 md:gap-14 order-2 lg:order-3 w-full">
            {rightColumnBenefits.map((benefit, index) => (
              <div
                key={benefit.id}
                className={`animate-fade-in-up ${getDelayClass(index, 3)}`}
              >
                <BenefitCard {...benefit} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
