import React from "react";

export const TestimonialSection = () => {
  return (
    <div className="bg-[#053C6D] py-20">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="text-6xl text-white/20 mb-6">"</div>
          <blockquote className="text-white text-xl mb-8 leading-relaxed">
            &quot;The hospital is not just a place of healing, but a sanctuary where
            compassion meets expertise, where every patient is treated with
            dignity, and where hope is restored one life at a time.&quot;
          </blockquote>
          <div className="text-white">
            <p className="font-semibold text-lg">Johnson</p>
            <div className="flex justify-center gap-2 mt-4">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-white/50 rounded-full"></div>
              <div className="w-2 h-2 bg-white/50 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
