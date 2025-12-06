interface BenefitCardProps {
  icon: string;
  title: string;
  description: string;
}

const BenefitCard = ({ icon, title, description }: BenefitCardProps) => {
  return (
    <div className="flex flex-col items-center gap-5 mx-auto">
      <img src={icon} alt={title} />
      <div className="flex flex-col items-center gap-3">
        <h4 className="text-center">{title}</h4>
        <p className="text-center">{description}</p>
      </div>
    </div>
  );
};

export default BenefitCard;
