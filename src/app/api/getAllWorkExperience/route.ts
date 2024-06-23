// app/api/getAllProjectsData/route.ts

import { NextRequest, NextResponse } from "next/server";

const workData = [
  {
    name: "LMG8",
    year: {
      from: "2023",
      to: "present",
    },
    subTitle: "Transforming the Future with Technology-driven Solutions",
    points: [
      "Designed user interfaces for websites and mobile apps, ensuring an intuitive and visually appealing experience.",
      "Led UI/UX efforts on client projects, exceeding client expectations.",
      "Collaborated with cross-functional teams for design coherence and functionality.",
      "Utilized tools such as Figma and Canva, for wireframes, prototypes, and mockups.",
      "Translated complex concepts into user-friendly designs that met business objectives.",
      "Stayed current with design trends, best practices.",
      "Delivered projects on time, implementing responsive design principles for optimal user experience.",
      "Received positive client feedback for delivering aesthetically pleasing and user-centric designs.",
    ],
    skills: [
      "UI Design",
      "UX Design",
      "Figma",
      "Canva",
      "Generative AI",
      "Client Interaction",
      "Collaborative Working",
    ],
  },
  {
    name: "Womean",
    year: {
      from: "2022",
      to: "2023",
    },
    subTitle:
      "One Stop Solution for everything concerning Women Health & Hygiene.",
    points: [
      "Developed a user-friendly interface for a women's hygiene website, focusing on accessibility and inclusivity.",
      "Implemented intuitive navigation and design elements to enhance the user experience in browsing feminine hygiene products.",
      "Crafted a user-friendly interface focusing on accessibility.",
      "Incorporated user insights for an intuitive shopping experience.",
    ],
    skills: ["UI Design", "UX Design", "Figma", "Canva", "Generative AI"],
  },
  {
    name: "Trustt (formerly Novopay)",
    year: {
      from: "2019",
      to: "2022",
    },
    subTitle: "Technology you can bank on!",
    points: [
      "Worked on resolution of financial task issued by support team.",
      "Performing wallet load reconciliation for IDFC, YBL, etc.",
    ],
    skills: ["MS Excel", "Re-concillation", "Wallet Loading", "Finance"],
  },
];

export async function GET(req: NextRequest) {
  // debugger;
  return NextResponse.json(workData);
}
