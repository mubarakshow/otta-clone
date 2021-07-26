type ExperienceLevel = "Entry" | "Junior" | "Mid" | "Senior" | "Expert";

interface Founder {
  name: string;
  job?: string;
}

export interface JobInterface {
  jobTitle?: string;
  jobTechnologiesUsed?: Array<string>;
  jobRequirements?: string;
  jobExperienceLevel?: String<ExperienceLevel>;
  jobInvolves?: string;
  companyLogo?: string;
  companyName?: string;
  companyDescription?: string;
  companyLocation?: string;
  companyMission?: string;
  companyGlassdoorRating?: number;
  companyBenefits?: string;
  companyFunding?: string;
  companyInvestors?: Array<string>;
  companyFounders?: Array<Founder>;
  companyArticles?: Array<string>;
  companyIndustries?: Array<string>;
}

// export type JobProfileProps = Pick<
//   JobInterface,
//   | "jobTitle"
//   | "jobExperienceLevel"
//   | "jobInvolves"
//   | "jobRequirements"
//   | "jobTechnologiesUsed"
// >;
