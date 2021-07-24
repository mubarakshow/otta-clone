const faker = require("faker");
const fs = require("fs");

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

const data = [];

for (let i = 0; i < 20; i++) {
  const technologiesUsed = [];
  // console.log("Got here: " + i);

  for (let j = 0; j < 6; j++) {
    // console.log("Got here: " + j);
    technologiesUsed.push(
      technologiesList[Math.floor(Math.random() * technologiesList.length)]
    );
  }

  const investorsInvesting = [];
  for (let j = 0; j < 3; j++) {
    // console.log("Got here: " + j);
    investorsInvesting.push(
      investors[Math.floor(Math.random() * investors.length)]
    );
  }

  const jobEntry = {
    companyName: faker.company.companyName(),
    logo: faker.image.imageUrl(80, 80, "animals", true, true),
    description: faker.lorem.sentence(),
    location: faker.address.city(),
    companyMission: faker.lorem.paragraph(),
    roleName: faker.name.jobTitle,
    technologiesUsed,
    glassdoorRating: Math.round(Math.random() * 5),
    requirements: faker.lorem.lines(),
    experienceLevel:
      experienceLevels[Math.floor(Math.random() * experienceLevels.length)],
    benefits: faker.lorem.paragraphs(),
    funding: faker.finance.amount(),
    investors: investorsInvesting,
    jobInvolves: faker.lorem.lines(),
    founders: [
      {
        name: faker.name.findName(),
        job: faker.name.jobTitle(),
      },
      {
        name: faker.name.findName(),
        job: faker.name.jobTitle(),
      },
    ],
    articles: [
      faker.internet.url(),
      faker.internet.url(),
      faker.internet.url(),
    ],
  };

  data.push(jobEntry);
}

fs.writeFileSync("../src/data/jobs.json", JSON.stringify(data, null, 2));
