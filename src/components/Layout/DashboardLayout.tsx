import Loading from "@/app/(Dashboard Layout)/loading";
import { Sidebar } from "@/components/Dashboard/Doctor/Sidebar";
import { ReactNode, Suspense } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex">
      <Sidebar />
      <Suspense fallback={<Loading />}>
        <main className="flex-1 ">{children}</main>
      </Suspense>
    </div>
  );
};

export default DashboardLayout;
