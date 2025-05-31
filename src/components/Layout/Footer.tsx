import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import { Logo } from "@/utils/image";
import Link from "next/link";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#053C6D] text-white py-16">
      <div className="container mx-auto flex justify-center px-6">
        <div className="grid md:grid-cols-5 gap-8">
          <div className="">
            <div className="flex items-center gap-2 mb-6">
              <Image src={Logo} alt="care cycle" className="h-10 w-58" />
            </div>
            <p className="text-blue-100 mb-6">
              Copyright © {currentYear} All rights reserved
            </p>
          </div>

          <div className="">
            <h3 className="font-semibold text-lg mb-4">Product</h3>
            <ul className="space-y-2 text-blue-100">
              <li>
                <a href="#" className="hover:text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Case studies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Updates
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-blue-100">
              <li>
                <a href="#" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Culture
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2 text-blue-100">
              <li>
                <a href="#" className="hover:text-white">
                  Getting started
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Help center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Server status
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Report a bug
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Chat support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Follow us</h3>
            <div className="flex flex-row md:flex-col gap-4">
              <Link href="#" className="text-blue-100 hover:text-white">
                <div className="w-6 h-6 bg-white rounded-[5px] flex items-center justify-center">
                  <Facebook className=" w-5 h-5 text-[#555555]" />
                </div>
              </Link>
              <Link href="#" className="text-blue-100 hover:text-white">
                <div className="w-6 h-6 bg-white rounded-[5px] flex items-center justify-center">
                  <Twitter className="h-5 w-5  text-[#555555]" />
                </div>
              </Link>
              <Link href="#" className="text-blue-100 hover:text-white">
                <div className="w-6 h-6 bg-white rounded-[5px] flex gap-x-6 items-center justify-center">
                  <Instagram className="h-5 w-5 text-[#555555]" />
                  {/* <span className="">Instagram</span> */}
                </div>
              </Link>
              <Link href="#" className="text-blue-100 hover:text-white">
                <div className="w-6 h-6 bg-white rounded-[5px] flex items-center justify-center">
                  <Linkedin className="h-5 w-5 text-[#555555]" />
                </div>
              </Link>
              <Link href="#" className="text-blue-100 hover:text-white">
                <div className="w-6 h-6 bg-white rounded-[5px] flex items-center justify-center">
                  <Youtube className="h-5 w-5 text-[#555555]" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
