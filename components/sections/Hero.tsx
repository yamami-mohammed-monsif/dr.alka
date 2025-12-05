import Section from "../UI/Section";
import CTABtn from "../UI/CTABtn";
import Image from "next/image";
import { StatisticsData } from "@/constants";

const Hero = () => {
  return (
    <Section className="relative">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col ">
          <div className="flex items-center gap-2 mb-2 md:mb-0 md:mt-6 md:order-last animate-fade-in-up md:animate-delay-400">
            <div className="flex items-center happy-patinets-images">
              <div className="testimonial-image">
                <Image
                  src="/happy-patient1.webp"
                  alt="Happy patient 1"
                  width={36}
                  height={36}
                  className="w-full h-full object-cover"
                  priority={false}
                />
              </div>
              <div className="testimonial-image">
                <Image
                  src="/happy-patient2.webp"
                  alt="Happy patient 2"
                  width={36}
                  height={36}
                  className="w-full h-full object-cover"
                  priority={false}
                />
              </div>
              <div className="testimonial-image">
                <Image
                  src="/happy-patient3.webp"
                  alt="Happy patient 3"
                  width={36}
                  height={36}
                  className="w-full h-full object-cover"
                  priority={false}
                />
              </div>
              <div className="testimonial-image">
                <Image
                  src="/happy-patient4.webp"
                  alt="Happy patient 4"
                  width={36}
                  height={36}
                  className="w-full h-full object-cover"
                  priority={false}
                />
              </div>
              <div className="testimonial-image">
                <Image
                  src="/happy-patient5.webp"
                  alt="Happy patient 5"
                  width={36}
                  height={36}
                  className="w-full h-full object-cover"
                  priority={false}
                />
              </div>
            </div>
            <div>
              <p className="font-bold text-sm md:text-lg leading-4">+5000</p>
              <p className="text-xs leading-4 md:text-sm md:leading-5">
                Satisfied Patients
              </p>
            </div>
          </div>
          <h1 className="mb-2 md:mb-6 animate-fade-in-up animate-delay-100">
            See What Your Smile Could Look Like
          </h1>
          <p className="section-description mb-6 md:mb-8 animate-fade-in-up animate-delay-200">
            Discover what's possible with a complete smile transformation, no
            pressure, no obligation, just expert advice tailored to you.
          </p>
          <CTABtn className="animate-fade-in-up animate-delay-300">
            Book Your Free Smile Makeover Consultation
          </CTABtn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-6 md:mt-8 md:hidden animate-fade-in-up animate-delay-400">
            {StatisticsData.map((stat) => {
              return (
                <div key={stat.id} className="flex flex-col gap-0 items-center">
                  <span className="text-heading font-bold text-base md:text-xl">
                    {stat.value}
                  </span>
                  <span className="text-text text-xs md:text-sm">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-[335px] md:w-[350px] lg:w-[450px] xl:w-[600px] mx-auto rounded-lg md:rounded-2xl overflow-hidden">
          <Image
            src="/dr.alka1.png"
            alt="dr.Alka sitting in her office smiling"
            width={500}
            height={500}
            className="w-[335px] md:w-[350px] lg:w-[450px] xl:w-[600px]"
            loading="lazy"
            quality={75}
            sizes="(max-width: 767px) 335px, (max-width: 1023px) 350px, 600px"
            priority={false}
          />
        </div>
      </div>
    </Section>
  );
};

export default Hero;
