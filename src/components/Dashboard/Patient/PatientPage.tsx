"use client";

import React from "react";

import { Header } from "./Header";

import { RightSide } from "./RightSide";
import { LeftSide } from "./LeftSide";

export const PatientPage = () => {
  return (
    <div className=" grow-0 flex-1 p-6 bg-gray-50">
      <Header />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LeftSide />
        <RightSide />
      </div>
    </div>
  );
};
