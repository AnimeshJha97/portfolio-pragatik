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
      logo: "https://res.cloudinary.com/dwxylnkvd/image/upload/v1719209957/myhraki-logo_ezvqr5-min_nkh39b.png",
      preview: [
        "https://res.cloudinary.com/dwxylnkvd/image/upload/v1719209962/Myhraki_ftg9xr-min_onpjrn.png",
        "https://res.cloudinary.com/dwxylnkvd/image/upload/v1719209959/Myhraki-Dashboard_aalsti-min_u33lf6.png",
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
        "https://res.cloudinary.com/dwxylnkvd/image/upload/v1719209059/XystCare1_dh1ee2-min_h1y245.png",
        "https://res.cloudinary.com/dwxylnkvd/image/upload/v1719209058/XystCare-Desktop-HOME_juxdw4-min_zhv2bm.png",
        "https://res.cloudinary.com/dwxylnkvd/image/upload/v1719209058/XystCare-Desktop-Product_ilgglb-min_j1wx3h.png",
        "https://res.cloudinary.com/dwxylnkvd/image/upload/v1719209056/XystCare-Desktop-Product_List_hltrrf-min_muaesj.png",
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
      logo: "https://res.cloudinary.com/dwxylnkvd/image/upload/v1719209774/LMG8_1_okjidh-min_awptxw.png",
      preview: [
        "https://res.cloudinary.com/dwxylnkvd/image/upload/v1719209776/LMG8_Landing_Page_wvo56n-min_jniaaq.png",
        "https://res.cloudinary.com/dwxylnkvd/image/upload/v1719209777/LMG8_Landing_Page-1_t1mynj-min_yrqdml.png",
        "https://res.cloudinary.com/dwxylnkvd/image/upload/v1719209779/About_Us_miav4p-min_xt3ut2.png",
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
      logo: "https://res.cloudinary.com/dwxylnkvd/image/upload/v1719209895/Hope-Logo_kwxd67-min_w7lduv.png",
      preview: [
        "https://res.cloudinary.com/dwxylnkvd/image/upload/v1719209899/Hope-_Home_Page_ktqyap-min_lnhvro.jpg",
        "https://res.cloudinary.com/dwxylnkvd/image/upload/v1719209901/Live_work_Permanently_umzkgw-min_c0widj.png",
        "https://res.cloudinary.com/dwxylnkvd/image/upload/v1719209897/Contact_Us_rhoshh-min_lhlp3h.png",
      ],
    },
    description: "Education and Migration Website",
    projectType: "End-to-end responsive Website",
    roles: "UI/UX designer",
    industryType: "Education + Migration",
  },

  // {
  //   id: "Ally",
  //   name: "Ally",
  //   colors: {
  //     primary: "#096FB9",
  //     secondary: "#FFF7F1",
  //   },
  //   theme: "light",
  //   company: "LMG8",
  //   links: {
  //     webLink: "",
  //     logo: "",
  //     preview: [
  //       "https://res.cloudinary.com/dwxylnkvd/image/upload/v1719209453/Ally_Admin_mfllw5-min_vpegzw.png",
  //       "https://res.cloudinary.com/dwxylnkvd/image/upload/v1719209452/Ally_ryk0gq-min_cufdau.png",
  //       "https://res.cloudinary.com/dwxylnkvd/image/upload/v1719209897/Contact_Us_rhoshh-min_lhlp3h.png",
  //     ],
  //   },
  //   description: "Human Resource Management System",
  //   projectType: "End-to-end Admin Dashboard",
  //   roles: "UI/UX designer + Requirement Analyzer",
  //   industryType: "Human Resource",
  // },
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
