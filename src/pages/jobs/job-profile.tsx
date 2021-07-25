import React from "react";
import Chip from "../../components/Chip";
import ListView from "../../components/ListView";
import Section from "../../components/Section";

import { JobInterface } from "../../data/types";
import { getUniqueArrayItems } from "../../utils/getUniqueArrayItems";

export const JobProfile: React.FC<{ data: JobInterface }> = ({ data }) => {
  return (
    <div className="hidden sm:block p-5">
      <div className="bg-gray-50 px-4 py-3 rounded-2xl">
        {/* job basic info */}
        <Section title="">
          <h2 className="font-bold">{data.jobTitle}</h2>
        </Section>

        {/* job tech used */}
        <Section title="Technologies Used">
          <div className="flex">
            {getUniqueArrayItems(data.jobTechnologiesUsed)?.map((tech, i) => (
              <Chip key={i} text={tech} />
            ))}
          </div>
        </Section>

        {/* experience level */}
        <Section title="Experience Level">
          <h2>{data.jobExperienceLevel}</h2>
        </Section>

        {/* job requirements */}
        <Section title="Requirements">
          <ListView data={data.jobRequirements?.split("\n")} />
        </Section>

        {/* job involves */}
        <Section title="What the job involves">
          <ListView data={data.jobInvolves?.split("\n")} />
        </Section>
      </div>
    </div>
  );
};

export default JobProfile;
