import { StatisticsData } from "@/constants";

const Statistics = () => {
  return (
    <div className="hidden md:grid grid-cols-4 gap-8 bg-white rounded-xl max-w-2xl lg:max-w-4xl py-8 px-8 -mt-16 mx-auto shadow-lg">
      {StatisticsData.map((stat) => {
        return (
          <div key={stat.id} className="flex flex-col gap-0 items-center">
            <span className="text-heading font-bold text-base md:text-xl">
              {stat.value}
            </span>
            <span className="text-text text-center text-xs md:text-sm">
              {stat.label}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Statistics;
