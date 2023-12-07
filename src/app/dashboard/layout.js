import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="container mx-auto">
      <div className="flex gap-5">
        <Sidebar />
        {children}
      </div>
    </div>
  );
}
