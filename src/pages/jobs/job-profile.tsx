import React from "react";

import { JobInterface } from "../../data/types";

export const JobProfile: React.FC<{ data: JobInterface }> = ({ data }) => {
  return (
    <div className="hidden sm:block h-96 p-5">
      <div className="bg-gray-50 h-full rounded-2xl">
        <h2>{data.jobTitle}</h2>
      </div>
    </div>
  );
};

export default JobProfile;
