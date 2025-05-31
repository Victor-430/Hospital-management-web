"use client";
import "react-toastify/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
// import { SessionProvider } from "next-auth/react";
export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className=" mx-auto">
      {/* <SessionProvider> */}
      <ToastContainer />
      <Header />
      {children}
      <Footer />
      {/* </SessionProvider> */}
    </div>
  );
}
