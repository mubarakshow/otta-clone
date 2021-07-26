import React from "react";
import { JobInterface } from "../../data/types";
import Section from "../../components/Section";
import { getUniqueArrayItems } from "../../utils/getUniqueArrayItems";
import { StarIcon } from "@heroicons/react/solid";
import { LightBulbIcon } from "@heroicons/react/outline";
import ListView from "../../components/ListView";

export const CompanyProfile: React.FC<{ data: JobInterface }> = ({ data }) => {
  return (
    <div className="md:border-r-thin bg-white rounded-2xl md:rounded-none">
      <div className="h-full p-5">
        {/* heading company info */}
        <Section center>
          <div className="flex justify-center">
            <img
              src={data.companyLogo}
              alt={data.companyName}
              className="rounded-full"
            />
          </div>
          <div>
            <h2>{data.companyName}</h2>
          </div>
          <div className="inline-flex gap-3 mt-3">
            {data.companyIndustries &&
              getUniqueArrayItems(data.companyIndustries).map((industry, i) => (
                <h2 key={i} className="text-gray-500">
                  {industry}
                </h2>
              ))}
          </div>
        </Section>

        {/* company highlights - (glassdoor rating, etc..) */}
        <Section center>
          <p className="uppercase font-extralight mb-7 text-sm text-center text-gray-600">
            Technologies Used
          </p>
          <div className="inline-flex items-center justify-center gap-2 bg-gray-200 px-4 py-1 rounded-md">
            <StarIcon width={20} />
            <h2>Glassdoor {data.companyGlassdoorRating}</h2>
          </div>
        </Section>

        {/* company mission */}
        <Section title="Company mission">{data.companyMission}</Section>

        {/* company benefits */}
        <Section title="Company benefits">
          <ListView data={data.companyBenefits?.split("\n")} />
        </Section>

        {/* company articles */}
        {data.companyArticles && (
          <Section title={`Articles about ${data.companyName}`}>
            <div className="block space-y-3">
              {data.companyArticles.map((article, i) => (
                <div key={i} className="flex gap-3">
                  <LightBulbIcon width={20} />
                  <h2>
                    <a
                      href={article}
                      className="underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {article}
                    </a>
                  </h2>
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* company founders */}
        {data.companyFounders && (
          <Section title="Founders">
            <div>
              {data.companyFounders.map((founder, i) => (
                <h2 key={i}>
                  {founder.name} ({founder.job})
                </h2>
              ))}
            </div>
          </Section>
        )}
      </div>
    </div>
  );
};

export default CompanyProfile;
