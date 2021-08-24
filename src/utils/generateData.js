const faker = require("faker");
const fs = require("fs");
const { randomise } = require("./randomise");

const jobTitles = [
  "Sowftware Engineer",
  "Frontend Engineer",
  "Backend Developer",
  "Core Backend Infra - Ruby",
  "Core Backend - Nodejs",
  "Frontend React Developer",
  "Core Platform Frontend (React)",
  "Frontend Developer (Vue)",
];

const technologiesList = [
  "Node.js",
  "C#",
  "Java",
  "Docker",
  "Kubernetes",
  "AWS",
  "Terraform",
  "React",
  "Angular",
  "Vue",
  "Jenkins",
  "Postgres",
  "GCP",
];

const experienceLevels = ["Entry", "Junior", "Mid", "Senior", "Expert"];

const investors = [
  "Hoxton Ventures",
  "IFG.VC",
  "Data Point Capital",
  "Binomial Ventures",
  "GV",
  "Index Ventures",
  "Oxford Foundry",
  "Triple Point Ventures",
  "Amadeus Capital",
  "Y Combinator",
  "Speed Invest",
  "Octopus Ventures",
];

const industries = [
  "Enterprise",
  "SaaS",
  "Cloud computing",
  "Fintech",
  "AI",
  "ML",
  "B2C",
  "eCommerce",
  "Marketplace",
];

const data = [];

for (let i = 0; i < 7; i++) {
  const technologiesUsed = [];
  // console.log("Got here: " + i);

  for (let j = 0; j < 4; j++) {
    // console.log("Got here: " + j);
    technologiesUsed.push(randomise(technologiesList));
  }

  const investorsInvesting = [];
  for (let j = 0; j < 3; j++) {
    // console.log("Got here: " + j);
    investorsInvesting.push(randomise(investors));
  }

  const companyIndustries = [];
  for (let j = 0; j < 3; j++) {
    companyIndustries.push(randomise(industries));
  }

  const jobEntry = {
    jobTitle: randomise(jobTitles),
    jobTechnologiesUsed: technologiesUsed,
    jobRequirements: faker.lorem.lines(),
    jobExperienceLevel: randomise(experienceLevels),
    jobInvolves: faker.lorem.lines(),
    companyLogo: faker.image.imageUrl(80, 80, "animals", true, true),
    companyName: faker.company.companyName(),
    companyDescription: faker.lorem.sentence(),
    companyLocation: faker.address.city(),
    companyMission: faker.lorem.paragraph(),
    companyGlassdoorRating: Math.round(Math.random() * 5),
    companyBenefits: faker.lorem.paragraphs(),
    companyFunding: faker.finance.amount(),
    companyInvestors: investorsInvesting,
    companyIndustries,
    companyFounders: [
      {
        name: faker.name.findName(),
        job: faker.name.jobTitle(),
      },
      {
        name: faker.name.findName(),
        job: faker.name.jobTitle(),
      },
    ],
    companyArticles: [
      faker.internet.url(),
      faker.internet.url(),
      faker.internet.url(),
    ],
  };

  data.push(jobEntry);
}

fs.writeFileSync("../data/jobs.json", JSON.stringify(data, null, 2));
