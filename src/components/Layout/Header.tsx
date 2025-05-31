import React from "react";
import Link from "next/link";
import { Navigation } from "./Navigation";

export const Header = () => {
  return (
    <header className="w-full bg-white py-4 px-6 flex justify-between items-center shadow-sm border-b">
      <div className="flex items-center">
        <Link href="/" className="flex items-center"></Link>
      </div>
      <Navigation />
    </header>
  );
};
