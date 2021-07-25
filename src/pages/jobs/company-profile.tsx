import React from "react";
import { JobInterface } from "../../data/types";

export const CompanyProfile: React.FC<{ data: JobInterface }> = ({ data }) => {
  return (
    <div className="h-96 sm:border-r-thin bg-white rounded-2xl sm:rounded-none">
      <div className="h-full p-5">
        <h2>Company Profile</h2>
        <h2>{data.companyName}</h2>
      </div>
    </div>
  );
};

export default CompanyProfile;
