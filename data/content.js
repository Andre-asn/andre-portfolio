// Everything the page says lives here so copy edits never require touching
// layout. Anything marked TODO needs a real URL before launch.

export const profile = {
  name: "Andre Santiago-Neyra",
  role: "Software Engineer",
  location: "Fort Lee, New Jersey",
  phone: "(718) 772-4368",
  github: "https://github.com/Andre-asn",
  linkedin: "https://www.linkedin.com/in/andre-santiago-neyra/",
};

// The hero route line. `current` marks the station that gets the orange
// signal dot, and the order here is the order they appear on load.
export const route = [
  { place: "Queens", label: "Where I started", detail: "Moved to New Jersey in 2013" },
  { place: "Montclair State", label: "BS, Computer Science", detail: "May 2023" },
  { place: "Juno Health", label: "Software Engineer Intern", detail: "Summer 2025" },
  { place: "Airbnb", label: "Software Engineer Intern", detail: "Summer 2026" },
  { place: "Stevens", label: "MS, Software Engineering", detail: "December 2026", current: true },
];

export const bio = [
  "I am a software engineer finishing a master's in software engineering at Stevens Institute of Technology, graduating in December 2026. This past summer I was at Airbnb on the appeals platform, where I replaced about thirty hardcoded routing rules with a config-driven system so that policy owners could onboard new appeal types without an engineer in the loop. That took onboarding from roughly two weeks down to two days.",
  "Before that I spent a summer at Juno Health building the API and permissions layer behind a provider admin platform, and a semester at Stevens as a graduate research assistant teaching weekly labs on data pipelines to graduate students. Teaching turned out to be the thing that sharpened my engineering most, because you cannot hand-wave a concept in front of twenty people who are about to be graded on it.",
  "I grew up in Queens, moved to New Jersey in 2013, and never really left the area. Outside of work I am usually somewhere around the city looking for a new place to eat.",
];

export const experience = [
  {
    org: "Airbnb",
    role: "Software Engineer Intern",
    period: "June to August 2026",
    year: "2026",
    place: "Remote",
    stack: ["Java", "Scala", "GraphQL", "Apache Thrift", "Clump", "YAML"],
    points: [
      "Designed and shipped a config-driven routing system for appeal types, cutting onboarding time for policy owners from roughly two weeks to two days.",
      "Collapsed about thirty hardcoded routing rules into a single config schema spanning three downstream ticket and case management systems, letting policy owners across seven teams onboard independently.",
      "Built an event-driven, ticket-free workflow for the Safety Defense team so they could run reviews on their own, removing the manual creation step from their submission flow.",
      "Saved an estimated 160 engineering days a year by taking engineers out of the roughly twenty appeal-type onboardings Airbnb runs annually.",
    ],
  },
  {
    org: "Juno Health",
    role: "Software Engineer Intern",
    period: "May to August 2025",
    year: "2025",
    place: "Remote",
    stack: ["TypeScript", "Node.js", "Express", "PostgreSQL", "Next.js", "Postman"],
    points: [
      "Implemented more than twenty secure API endpoints and a role-based access control system using JWT and JOIN queries, protecting sensitive provider data across six database tables.",
      "Built a provider admin platform in Next.js and Express alongside the VP of Engineering, cutting onboarding time by 40 percent for the first fifteen beta users.",
      "Shipped production features for a Product Hunt launch that reached number three, verifying data accuracy across thirty endpoints with Postman coverage.",
    ],
  },
  {
    org: "Stevens Institute of Technology",
    role: "Graduate Research Assistant",
    period: "January to May 2025",
    year: "2025",
    place: "Hoboken, NJ",
    stack: ["Snowflake", "Snowpark", "SQL", "Python"],
    points: [
      "Taught weekly lab sessions for more than twenty graduate students, walking them through real pipelines of over five million records in Snowflake and Snowpark.",
      "Expanded the course curriculum with my supervisor by writing hands-on lab exercises and giving individual feedback on student work.",
    ],
  },
];

export const education = [
  {
    school: "Stevens Institute of Technology",
    credential: "MS, Software Engineering",
    detail: "GPA 3.6. Software Testing and QA, DevOps Principles, Component Based Design.",
    when: "Expected December 2026",
  },
  {
    school: "Montclair State University",
    credential: "BS, Computer Science",
    detail: "Montclair, New Jersey.",
    when: "May 2023",
  },
];

export const projects = [
  {
    name: "Order Up!",
    year: "2025",
    status: "Live",
    featured: true,
    summary:
      "A real-time party game for six to eight concurrent players, running about five games and twenty site visits a week.",
    detail:
      "The interesting problem here was keeping eight browsers agreeing on one game state over WebSockets without a central tick loop getting expensive. Sentry watches more than fifty distributed traces across the API and socket connections, which is how it holds above 99 percent uptime with average response times under 200ms.",
    stack: ["TypeScript", "Bun", "Elysia", "Vite", "Docker", "Heroku", "Sentry"],
    url: "https://orderup.gg/",
  },
  {
    name: "Portion",
    year: "In progress",
    status: "Building",
    summary:
      "A cross-platform app that splits a restaurant bill by scanning it, so nobody has to do arithmetic at the table.",
    detail:
      "Mistral OCR reads the receipt into line items, then Flutter handles assignment per person. The Express API runs on Google Cloud with Supabase row-level security and full Postman coverage.",
    stack: ["Flutter", "Express", "Supabase", "PostgreSQL", "Google Cloud", "Mistral OCR"],
    url: null, // TODO: add the URL once it ships
  },
  {
    name: "Stroopy",
    year: "2024",
    status: "Live",
    summary:
      "A one-on-one multiplayer take on the Stroop test, where color words fight with the color they are printed in.",
    detail:
      "Players race each other on cognitive interference in real time, with a single-player mode for practice.",
    stack: ["React", "Node.js", "WebSockets"],
    url: "https://stroopy.vercel.app",
  },
];

export const skills = [
  {
    group: "Languages",
    items: ["TypeScript", "JavaScript", "Java", "Python", "Go", "SQL", "Scala", "PHP"],
  },
  {
    group: "Frameworks and runtimes",
    items: ["React", "Next.js", "Node.js", "Express", "Bun", "Elysia", "Flutter", "GraphQL", "Apache Thrift"],
  },
  {
    group: "Data and infrastructure",
    items: ["PostgreSQL", "MongoDB", "Supabase", "Snowflake", "Docker", "AWS", "Google Cloud", "Linux", "Git"],
  },
  {
    group: "Certifications",
    items: ["CodePath TIP102", "Boot.dev: Python, Linux, Git, OOP, Go"],
  },
];

export const nav = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];
