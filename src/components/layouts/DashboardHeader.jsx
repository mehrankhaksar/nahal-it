import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";

const DashboardHeader = () => {
  return (
    <header className="text-primary-foreground bg-primary shadow-lg z-40">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-5">
          <h2 className="h2">پنل ادمین نهال آی‌تی</h2>
          <Avatar>
            <AvatarImage
              src="/assets/images/dashboard/avatar.png"
              alt="Avatar"
            />
            <AvatarFallback>MK</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
