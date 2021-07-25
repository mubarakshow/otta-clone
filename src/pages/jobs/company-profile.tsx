import React from "react";
import { JobInterface } from "../../data/types";
import Section from "../../components/Section";
import { getUniqueArrayItems } from "../../utils/getUniqueArrayItems";
import { StarIcon, LightBulbIcon } from "@heroicons/react/solid";
import ListView from "../../components/ListView";

export const CompanyProfile: React.FC<{ data: JobInterface }> = ({ data }) => {
  return (
    <div className="sm:border-r-thin bg-white rounded-2xl sm:rounded-none">
      <div className="h-full p-5">
        {/* heading company info */}
        <Section title="">
          <img src={data.companyLogo} alt={data.companyName} />
          <h2>{data.companyName}</h2>
          <div className="flex justify-around">
            {data.companyIndustries &&
              getUniqueArrayItems(data.companyIndustries).map((industry, i) => (
                <h2 key={i}>{industry}</h2>
              ))}
          </div>
        </Section>

        {/* company highlights - (glassdoor rating, etc..) */}
        <Section title="">
          <div className="inline-flex items-center justify-center bg-gray-200 px-4 py-1 rounded-md">
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
            <div className="block">
              {data.companyArticles.map((article, i) => (
                <div key={i} className="flex">
                  <LightBulbIcon width={20} />
                  <h2>
                    <a href={article} target="_blank" rel="noreferrer">
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
                <h2>
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
