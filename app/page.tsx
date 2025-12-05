import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import Statistics from "@/components/UI/Statistics";

export default function Home() {
  return (
    <>
      <div className="bg-bg pb-16">
        <Header />
        <Hero />
      </div>
      <Statistics />
    </>
  );
}
