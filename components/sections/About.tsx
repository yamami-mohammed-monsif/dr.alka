"use client";

import Section from "../UI/Section";
import Image from "next/image";
import useOnScreen from "@/hooks/useOnScreen";

const About = () => {
  const [sectionRef, isVisible] = useOnScreen({ threshold: 0.2 });
  return (
    <Section id="#about" title="About Us" ref={sectionRef} className="bg-bg">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col items-start gap-6 max-w-xl">
          <h2 className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            You're in Expert Hands
          </h2>
          <p
            className={`italic ${
              isVisible ? "animate-fade-in-up animate-delay-100" : "opacity-0"
            }`}
          >
            “I believe every patient deserves to feel confident in their smile
            and fully understand their options before making any decision.”
          </p>
          <p
            className={`${
              isVisible ? "animate-fade-in-up animate-delay-200" : "opacity-0"
            }`}
          >
            With <span className="font-semibold">10+ years</span> of experience
            in cosmetic and general dentistry, Dr. Alka has helped patients
            transform their smiles with veneers, aligners, and full makeover
            cases.
          </p>
          <p
            className={`${
              isVisible ? "animate-fade-in-up animate-delay-300" : "opacity-0"
            }`}
          >
            Her clinic offers a welcoming environment designed to make even the
            most nervous patients feel at ease.
          </p>
        </div>
        <div className="w-full sm:w-[350px] lg:w-[450px] xl:w-[500px] mx-auto rounded-lg md:rounded-2xl overflow-hidden">
          <Image
            src="/about-img.webp"
            alt="dr.Alka sitting in her office smiling"
            width={500}
            height={500}
            className="w-full sm:w-[350px] lg:w-[450px] xl:w-[500px]"
            loading="lazy"
            quality={75}
            sizes="(max-width: 767px) 335px, (max-width: 1023px) 350px, 500px"
            priority={false}
          />
        </div>
      </div>
    </Section>
  );
};

export default About;
