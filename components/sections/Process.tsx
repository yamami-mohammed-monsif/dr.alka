"use client";

import Section from "../UI/Section";
import { Steps } from "@/constants";
import StepCard from "../UI/StepCard";
import useOnScreen from "@/hooks/useOnScreen";

const Process = () => {
  const [sectionRef, isVisible] = useOnScreen({ threshold: 0.2 });

  const getDelayClass = (index: number) => {
    if (index === 0) return "animate-delay-100";
    if (index === 1) return "animate-delay-250";
    if (index === 2) return "animate-delay-400";
    return "animate-delay-400"; // for 4th+
  };
  return (
    <Section ref={sectionRef}>
      <div className="flex flex-col items-center mb-10 md:mb-12">
        <h2 className={`${isVisible ? "aniamte-fade-in-up" : "opacity-0"}`}>
          Your path to a confident smile
        </h2>
        <p
          className={`section-description text-center max-w-xl! ${
            isVisible ? "aniamte-fade-in-up animate-delay-100" : "opacity-0"
          }`}
        >
          Every great transformation begins with a single step. We simplify your
          dental experience through a clear, compassionate process that puts
          your comfort and goals first.
        </p>
      </div>
      <div className="grid gap-10 md:grid-cols-3 items-center">
        {Steps.map((step, index) => {
          return (
            <div
              key={step.id}
              className={
                isVisible
                  ? `animate-fade-in-up ${getDelayClass(index)}`
                  : "opacity-0"
              }
            >
              <StepCard {...step} />
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Process;
