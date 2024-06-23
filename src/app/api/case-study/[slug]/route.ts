// app/api/case-study/[slug]/route.ts

import { NextRequest, NextResponse } from "next/server";

type Project = {
  slug: string;
  title: string;
  description: string;
};

const projects: Project[] = [
  {
    slug: "Myhraki",
    title: "Myhraki",
    description: "Description for Myhraki",
  },
  {
    slug: "project2",
    title: "Project 2",
    description: "Description for Project 2",
  },
];

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;

  const project = projects.find((project) => project.slug === slug);

  if (project) {
    return NextResponse.json(project);
  } else {
    return NextResponse.json({ message: "Project not found" }, { status: 404 });
  }
}
