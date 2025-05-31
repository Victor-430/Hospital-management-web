"use client";
import "react-toastify/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { ReactNode } from "react";
// import { SessionProvider } from "next-auth/react";
export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <div className=" mx-auto">
      {/* <SessionProvider> */}
      <ToastContainer />
      {children}
      {/* </SessionProvider> */}
    </div>
  );
}
