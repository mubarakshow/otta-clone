import React from "react";
import Chip from "../../components/Chip";
import ListView from "../../components/ListView";
import Section from "../../components/Section";

import { JobInterface } from "../../data/types";
import { getUniqueArrayItems } from "../../utils/getUniqueArrayItems";

export const JobProfile: React.FC<{ data: JobInterface }> = ({ data }) => {
  const experienceLevels = ["Entry", "Junior", "Mid", "Senior", "Expert"];

  return (
    <div className="hidden md:block p-5">
      <div className="bg-gray-50 px-4 py-3 rounded-2xl">
        {/* job basic info */}
        <Section title="">
          <h2 className="font-bold text-lg text-center">{data.jobTitle}</h2>
        </Section>

        {/* job tech used */}
        <Section>
          <p className="uppercase font-extralight mb-7 text-sm text-center text-gray-600">
            Technologies Used
          </p>
          <div className="grid grid-flow-col auto-cols-max gap-2 items-center justify-center">
            {getUniqueArrayItems(data.jobTechnologiesUsed)?.map((tech, i) => (
              <Chip key={i} text={tech} />
            ))}
          </div>
        </Section>

        {/* experience level */}
        <Section center>
          <p className="uppercase font-extralight mb-7 text-sm text-center text-gray-600">
            Experience Level
          </p>
          {experienceLevels && (
            <div className="flex justify-around max-w-md">
              {experienceLevels.map((level, i) => (
                <div key={i} className="w-16">
                  <p>{level}</p>
                  <hr
                    className={`mt-3 border-4 border-gray-100 rounded-3xl ${
                      level === data.jobExperienceLevel ? "border-gray-300" : ""
                    }`}
                  />
                </div>
              ))}
            </div>
          )}
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
