// app/api/getAllProjectsData/route.ts

import { NextRequest, NextResponse } from "next/server";

const projects = [
  {
    id: "Myhraki",
    name: "Myhraki",
    colors: {
      primary: "#EB4D80",
      secondary: "#FFF4EB",
    },
    theme: "light",
    company: "LMG8",
    links: {
      webLink: "https://www.myhraki.com/",
      logo: "https://res.cloudinary.com/dwxylnkvd/image/upload/v1718691145/myhraki-logo_ezvqr5.png",
      preview: [
        "https://res.cloudinary.com/dwxylnkvd/image/upload/v1718691149/Myhraki_ftg9xr.png",
        "https://res.cloudinary.com/dwxylnkvd/image/upload/v1719139327/Myhraki-Dashboard_aalsti.png",
      ],
    },
    description: "Small business authentic store",
    projectType: "Responsive Website + Admin Dashboard + Mobile App ",
    roles: "UI/UX designer",
    industryType: "E-commerce",
  },
  {
    id: "XystCare",
    name: "Xyst Care",
    colors: {
      primary: "#EDF1D6",
      secondary: "#40513B",
    },
    theme: "light",
    company: "Freelance",
    links: {
      webLink: "https://xystcare.com/",
      logo: "",
      preview: [
        "https://res.cloudinary.com/dwxylnkvd/image/upload/v1719087861/XystCare1_dh1ee2.png",
        "https://res.cloudinary.com/dwxylnkvd/image/upload/v1719087145/XystCare-Desktop-HOME_juxdw4.png",
        "https://res.cloudinary.com/dwxylnkvd/image/upload/v1719087146/XystCare-Desktop-Product_ilgglb.png",
        "https://res.cloudinary.com/dwxylnkvd/image/upload/v1719087142/XystCare-Desktop-Product_List_hltrrf.png",
      ],
    },
    description: "Authentic Derma Certified Store",
    projectType: "End-to-end responsive Website + Graphic Designing",
    roles: "UI/UX designer + Brand Designer",
    industryType: "E-commerce + Derma + Medicinal",
  },
  {
    id: "LMG8",
    name: "LMG8",
    colors: {
      primary: "#011D3C",
      secondary: "#5797ED",
    },
    theme: "dark",
    company: "LMG8",
    links: {
      webLink: "https://www.thehopegroup.co.in/",
      logo: "https://res.cloudinary.com/dwxylnkvd/image/upload/v1718967443/LMG8_1_okjidh.png",
      preview: [
        "https://res.cloudinary.com/dwxylnkvd/image/upload/v1718967658/LMG8_Landing_Page_wvo56n.png",
        "https://res.cloudinary.com/dwxylnkvd/image/upload/v1718967399/About_Us_miav4p.png",
        "https://res.cloudinary.com/dwxylnkvd/image/upload/v1718967399/LMG8_Landing_Page-1_t1mynj.png",
      ],
    },
    description: "Transforming the future with technology-driven solutions",
    projectType: "Portfolio + Responsive Website",
    roles: "UI/UX designer",
    industryType: "Technology + Information and Internet",
  },
  {
    id: "Hope",
    name: "HOPE",
    colors: {
      primary: "#096FB9",
      secondary: "#FFF7F1",
    },
    theme: "light",
    company: "LMG8",
    links: {
      webLink: "https://www.thehopegroup.co.in/",
      logo: "https://res.cloudinary.com/dwxylnkvd/image/upload/v1718976311/Hope-Logo_kwxd67.png",
      preview: [
        "https://res.cloudinary.com/dwxylnkvd/image/upload/v1718965452/Hope-_Home_Page_ktqyap.jpg",
        "https://res.cloudinary.com/dwxylnkvd/image/upload/v1718965450/Live_work_Permanently_umzkgw.png",
        "https://res.cloudinary.com/dwxylnkvd/image/upload/v1718965449/Contact_Us_rhoshh.png",
      ],
    },
    description: "Education and Migration Website",
    projectType: "End-to-end responsive Website",
    roles: "UI/UX designer",
    industryType: "Education + Migration",
  },
];

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const projectName = searchParams.get("projectName");
  // debugger;
  if (projectName) {
    const project = projects.find((proj) => proj.name === projectName);
    return NextResponse.json(project);
  } else {
    return NextResponse.json(projects);
  }
}
