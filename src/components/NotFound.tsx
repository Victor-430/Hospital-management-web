"use client";

import React from "react";
import Link from "next/link";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Wrench, Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export const NotFound = () => {
  const pathname = usePathname();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      pathname
    );
  }, [pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center mx-auto bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center max-w-md mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <motion.h1
            className="text-8xl font-bold text-blue-600"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            404
          </motion.h1>

          <motion.div
            className="flex justify-center"
            initial={{ rotate: -180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <Wrench className="w-8 h-8 bg-[#053C6D]" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="space-y-3"
          >
            <h2 className="text-2xl font-semibold text-gray-800">
              Currently Working to Fix This Page
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We&apos;re working hard to get this page back up and running. Please
              check back later or return to the homepage.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col  gap-6 justify-center"
          >
            <Button
              onClick={() => window.history.back()}
              variant="outline"
              className="flex items-center gap-2 bg-[#053C6D]"
            >
              <ArrowLeft className="w-4 h-4 " />
              Go Back
            </Button>
            <Button asChild className="flex items-center gap-2">
              <Link href="/">
                <Home className="w-4 h-4 text-[#053C6D]  " />
                Return Home
              </Link>
            </Button>
          </motion.div>

          {/* Loading Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="pt-6"
          >
            <div className="flex justify-center space-x-1">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-[#053C6D] rounded-full"
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-2">Working on it...</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
