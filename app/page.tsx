import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import Statistics from "@/components/UI/Statistics";
import Testimonials from "@/components/sections/Testimonials";
import BeforeAfters from "@/components/sections/BeforeAfters";
import Benefits from "@/components/sections/Benefits";
import Process from "@/components/sections/Process";
import About from "@/components/sections/About";
import FAQs from "@/components/sections/FAQs";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <div className="bg-bg pb-16">
        <Header />
        <Hero />
      </div>
      <Statistics />
      <Testimonials />
      <BeforeAfters />
      <Benefits />
      <Process />
      <About />
      <FAQs />
      <CTA />
    </>
  );
}
