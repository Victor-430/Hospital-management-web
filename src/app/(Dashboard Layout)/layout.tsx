import type { Metadata } from "next";
// import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import DashboardLayout from "@/components/Layout/DashboardLayout";
import { Header } from "@/components/Layout/Header";
import { ToastContainer } from "react-toastify";
import { SessionProvider } from "@/components/SessionProvider";

// const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hospital Management System",
  description: "Making life easier and better",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <ToastContainer />
          <Header />
          <DashboardLayout>{children}</DashboardLayout>
        </SessionProvider>
      </body>
    </html>
  );
}
