import DashboardHeader from "@/components/layouts/DashboardHeader";
import Sidebar from "@/components/layouts/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="space-y-10">
      <DashboardHeader />
      <div className="container mx-auto">
        <div className="flex gap-5">
          <Sidebar />
          {children}
        </div>
      </div>
    </div>
  );
}
