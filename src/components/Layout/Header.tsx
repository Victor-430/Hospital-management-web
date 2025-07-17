"use client";
import React from "react";
import { Navigation } from "./Navigation";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="w-full bg-white py-4 px-6 flex justify-between items-center shadow-sm border-b">
      <div className="flex items-center">
        <Link
          href="/"
          className={`px-3 py-2 rounded-md  font-normal text-[1rem] transition-colors flex items-center md:hidden ${
            pathname === "/"
              ? "text-white bg-[#053C6D] "
              : "text-[#000000] hover:text-[#053C6D] hover:bg-[#DAF1FB]"
          }`}
        >
          Home
        </Link>
      </div>
      <Navigation />
    </header>
  );
};
