import { NursePage } from "@/components/Dashboard/Nurse/NursePage";

import React from "react";

const page = ({ userName }: { userName: string | null }) => {
  return (
    <div>
      <NursePage />
    </div>
  );
};

export default page;
