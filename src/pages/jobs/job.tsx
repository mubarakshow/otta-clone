import React from "react";
// import data from "../../data/jobs.json";
import CompanyProfile from "./company-profile";
import JobProfile from "./job-profile";
import { JobInterface } from "../../data/types";

// const jobData = data[0];

const Job: React.FC<{ data: JobInterface }> = ({ data }) => {
  return (
    // <div></div>
    <div className="grid sm:grid-cols-2 mx-10 py-3 bg-white rounded-2xl overflow-hidden shadow-sm">
      <CompanyProfile data={data} />
      <JobProfile data={data} />
    </div>
  );
};

export default Job;
