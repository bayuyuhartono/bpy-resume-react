import type { Education, Experience, LabelValue, NumberedItem, Stat } from "@/types/content"

export const CLIENTS = ["Juragan99", "Pintar Ventura", "Katadata", "Untar", "Raja Konstruksi"]

export const ABOUT = {
  label: "About me",
  headingLines: ["Building with purpose,", "shipping with impact"],
  story: [
    "I'm a software engineer with 8+ years of experience building mobile, web and backend systems for fintech, media, education, transportation and construction companies. I usually own delivery end to end — architecture, implementation, release and working directly with clients and product teams.",
    "In 2022 I founded Pesoros Dev, a one-person software studio. Its first product, Juragan99, reached 10,000+ active users within three months of launch; since then I've shipped platforms for clients in construction and education.",
  ],
  stack: [
    { label: "Mobile", value: "React Native · Flutter · Swift · Kotlin" },
    { label: "Backend", value: "Laravel · Node.js · REST APIs" },
    { label: "Web", value: "React · TypeScript" },
    { label: "Data & ops", value: "MySQL · PostgreSQL · Redis · Docker" },
  ] satisfies LabelValue[],
  stats: [
    { value: "8", accent: "+", label: "Years" },
    { value: "10K", accent: "+", label: "Users in 3 months" },
    { value: "5", label: "Industries" },
  ] satisfies Stat[],
}

export const PROCESS: NumberedItem[] = [
  {
    title: "Understand",
    description:
      "Get clear on the business goal, the users and the constraints before writing code.",
  },
  {
    title: "Architect",
    description:
      "Choose the stack, data model and API shape so the product can grow without a rewrite.",
  },
  {
    title: "Build & ship",
    description:
      "Deliver in small, tested increments across mobile, web and backend, then release.",
  },
  {
    title: "Maintain",
    description: "Monitor, fix and improve after launch — the part that keeps users coming back.",
  },
]

export const EXPERIENCE: Experience[] = [
  {
    company: "Pesoros Dev",
    period: "2022 — Now",
    current: true,
    role: "Founder & Software Engineer · Solo studio · Remote",
    bullets: [
      "Founded Pesoros Dev, a one-person software studio, in 2022; running it full-time since January 2025.",
      "Built and shipped Juragan99, the studio's first product — a bus-booking platform for Android, iOS and web with 10,000+ active users within 3 months of launch.",
      "Delivered platforms for Raja Konstruksi and Universitas Tarumanagara, plus a campus management system.",
      "Own every engagement end to end: client communication, architecture, development, deployment and maintenance.",
    ],
  },
  {
    company: "Pintar Ventura Group",
    period: "Aug 2022 — Feb 2025",
    role: "Mobile Developer · South Jakarta",
    bullets: [
      "Rebuilt Klikoo, a PPOB app for bill payments and digital top-ups, from scratch as v2 on a modern React Native architecture.",
      "Fixed the root causes of recurring crashes and made the app noticeably faster and more stable.",
      "Integrated event-tracking and advertising SDKs, and added QA test IDs and unit tests for every component.",
    ],
  },
  {
    company: "Katadata Indonesia",
    period: "Feb 2020 — Aug 2022",
    role: "Software Engineer · Contract",
    bullets: [
      "Owned end-to-end development of katadata.co.id and databoks.katadata.co.id, two leading data-journalism platforms.",
      "Led a full UI revamp and added a Redis caching layer that keeps high-traffic pages fast during spikes.",
      "Built interactive charts, data-tree visualizations and microsites for editorial events.",
    ],
  },
  {
    company: "Universitas Tarumanagara",
    period: "Jan 2018 — Dec 2019",
    role: "Software Engineer · Contract",
    bullets: [
      "Built and maintained internal web systems for the university foundation and faculties, serving thousands of users.",
      "Built RESTful APIs for the university's mobile apps and introduced a Git-based workflow for the team.",
      "Led an internal data-integration project with Indonesia's Ministry of Education (Kemendikbud).",
    ],
  },
]

export const EDUCATION: Education[] = [
  {
    school: "Universitas Bina Sarana Informatika",
    program: "Diploma (D3), Management Information Systems",
    period: "2014 — 2017",
  },
  {
    school: "Pijar Camp",
    program: "Full-Stack Developer Bootcamp (React, React Native)",
    period: "2019 — 2020",
  },
]

export const LANGUAGES: LabelValue[] = [
  { label: "Indonesian", value: "Native" },
  { label: "English", value: "Professional working" },
]
