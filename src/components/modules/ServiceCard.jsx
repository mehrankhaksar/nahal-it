import { Button } from "../ui/button";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center gap-5 p-5 rounded-xl shadow-xl">
      <div className="text-primary-foreground bg-primary p-5 rounded-full">
        {icon}
      </div>
      <h3 className="h3 text-center">{title}</h3>
      <p className="description">{description}</p>
      <Button className="w-full bg-primary">اطلاعات بیشتر</Button>
    </div>
  );
};

export default ServiceCard;
