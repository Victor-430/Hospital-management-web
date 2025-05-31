import Loading from "@/app/(Dashboard Layout)/loading";
import { Sidebar } from "@/components/Dashboard/Doctor/Sidebar";
import { ReactNode, Suspense } from "react";
import { ToastContainer } from "react-toastify";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex">
      <ToastContainer />
      <Sidebar />
      <Suspense fallback={<Loading />}>
        <main className="flex-1 overflow-auto">{children}</main>
      </Suspense>
    </div>
  );
};

export default DashboardLayout;
