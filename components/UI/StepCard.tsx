interface StepCardProps {
  icon: string;
  title: string;
  description: string;
}

const StepCard = ({ icon, title, description }: StepCardProps) => {
  return (
    <div className="flex flex-col items-center gap-5 mx-auto">
      <img
        src={icon}
        alt={title}
        className="aspect-squar w-8 md:w-10 lg:w-12"
      />
      <div className="flex flex-col items-center gap-5">
        <h4 className="text-center max-w-xs">{title}</h4>
        <p className="text-center">{description}</p>
      </div>
    </div>
  );
};

export default StepCard;
