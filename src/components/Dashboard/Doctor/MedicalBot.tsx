import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Ava } from "@/utils/image";
import Image from "next/image";
import React from "react";

export const MedicalBot = () => {
  return (
    <div className="w-full md:w-[20rem] h-[15.5rem]">
      {/* Medical Bot */}
      <Card className="bg-slate-900 text-white ">
        <CardContent className="p-6">
          <div className="text-center">
            <div className="mb-4">
              <div className="w-16 h-16  mx-auto flex items-center justify-center">
                <Image
                  alt="med bot"
                  src={Ava}
                  className="h-16 w-16 rounded-full animate-pulse"
                />
              </div>
            </div>
            <h3 className="font-semibold mb-2">MED BOT</h3>
            <p className="text-sm text-gray-300 mb-4">
              Get instant medical assistance and answers to your questions
            </p>
            <Button variant="secondary" size="sm">
              Ask a question
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
