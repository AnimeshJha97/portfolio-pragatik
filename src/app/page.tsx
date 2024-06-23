"use client";
import { useEffect, useRef, useState } from "react";
import Nezuko from "@/components/Nezuko";
import ContactMe from "@/components/ContactMe";
import EmailModal from "@/components/EmailModal";
import { Triangle } from "react-loader-spinner";
import Intro from "@/components/Intro";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

interface SectionRefs {
  [key: string]: React.RefObject<HTMLDivElement>;
}

export default function Home() {
  // variable decleration
  let sectionRefs: SectionRefs = {
    page1: useRef<HTMLDivElement>(null),
    page2: useRef<HTMLDivElement>(null),
    page3: useRef<HTMLDivElement>(null),
  };

  const menuOptions = [
    {
      id: "page1",
      name: "01 - Intro",
    },
    {
      id: "page2",
      name: "02 - Experience",
    },
    {
      id: "page3",
      name: "03 - Projects",
    },
  ];
  // style decleration
  const styles = {
    loading_container: "flex flex-col min-h-screen justify-center items-center",
    loading_container_inner:
      "inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]",
    loading_container_inner_span:
      "!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]",
    container:
      "duration-300 relative flex flex-col ml-6 mr-6 md:ml-0 md:mr-0 min-h-screen overflow-y-scroll justify-center items-center p-sm pt-16 md:p-md lg:p-lg select-none",
    pageTitle: "absolute top-0 left-0 p-sm md:p-md lg:p-lg",
    pageTitle_p: "text-textWhite text-base md:text-md font-medium",
    pageTitle_p_span: "text-textLight",
    content:
      "text-textLight flex flex-col gap-2 md:gap-12 md:flex-row md:items-center justify-between relative z-[2]",
    content_left: "flex flex-col flex-[0.8] lg-flex-[0.7] gap-2 md:gap-4",
    content_left_title:
      "text-md md:text-lg lg:text-xxl font-bold text-textWhite",
    content_left_subtitle:
      "text-sm md:text-base lg:text-md mb-4 font-medium text-textWhite",
    content_left_description: "text-xs md:text-sm mt-3",
    content_right: "flex flex-col gap-2 md:gap-4 md:flex-[0.95] lg:flex-[0.6]",
    content_right_about:
      "ml-6 flex flex-col gap-2 lg:gap-12 text-xs md:text-sm h-[640px] overflow-y-scroll",
    content_right_about_span: "text-textWhite",
    routeIcons:
      "fixed top-0 left-0 h-screen w-full flex justify-between items-center pl-3 pr-3 md:pl-8 md:pr-8",
    content_nezuko:
      "relative w-auto md:absolute md:bottom-2 md:left-14 p-sm pb-0 md:p-md md:pb-0 lg:p-lg lg:pb-0 mt-12 z-10",
  };
  // useStates
  const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 });
  const [selectedMenuOption, setSelectedMenuOption] = useState(
    menuOptions[0].id
  );

  const [isLoading, setIsLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2, // Adjust this threshold as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target) {
          // Find the work name associated with the section
          const optionId = Object.keys(sectionRefs).find(
            (id) => sectionRefs[id].current === entry.target
          );

          if (optionId) {
            setSelectedMenuOption(optionId);
          }
        }
      });
    }, observerOptions);

    // Attach the observer to each section ref
    Object.keys(sectionRefs).forEach((optionId) => {
      const currentSectionRef = sectionRefs[optionId].current;
      if (currentSectionRef) {
        observer.observe(currentSectionRef as Element); // Type assertion here
      }
    });

    // Clean up the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, [sectionRefs]);

  const handleMenuOptionClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    menuOption: string
  ) => {
    e.preventDefault();
    console.log("menuOption", menuOption);

    setSelectedMenuOption(menuOption);

    const selectedSection = sectionRefs[menuOption];

    if (selectedSection && selectedSection.current) {
      selectedSection.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleMouseMove = (event: {
    clientX: number;
    clientY: number;
  }): void => {
    const { clientX, clientY } = event;
    setMouseCoordinates({ x: clientX, y: clientY });
  };

  const handleModalOpen = () => {
    setOpenModal((current) => {
      console.log("model set to ", !current);
      return !current;
    });
  };

  return (
    <main>
      {isLoading ? (
        <div className="flex flex-col min-h-screen justify-center items-center">
          <Triangle
            visible={true}
            height="160"
            width="160"
            color="#fdacb3"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : (
        <div
          className="duration-300 relative flex flex-col ml-6 mr-6 md:ml-0 md:mr-0 h-screen overflow-hidden justify-center items-center pt-16 !select-none"
          onMouseMove={handleMouseMove}
        >
          {/* content */}
          <div className="text-textLight flex flex-col mt-12 md:mt-0 gap-4 md:flex-row md:items-center justify-between relative z-[2] w-full">
            {/* left */}
            <div className="flex items-center flex-1 lg:flex-[0.2] pl-[128px]">
              <div className="flex flex-col gap-8 w-full">
                {menuOptions.map((option) => (
                  <div
                    key={option.id}
                    className="flex gap-4 items-center justify-normal group cursor-pointer max-w-[700px]"
                    onClick={(e) => handleMenuOptionClick(e, option.id)}
                  >
                    <div
                      className={
                        selectedMenuOption === option.id
                          ? "h-[1px] duration-300 w-8 md:w-12 bg-textWhite"
                          : "h-[1px] w-6 md:w-6 duration-300 group-hover:w-12 group-hover:bg-textWhite bg-textLight"
                      }
                    />
                    <p
                      className={
                        selectedMenuOption === option.id
                          ? "text-xs md:text-md text-textWhite"
                          : "text-xs md:text-md group-hover:text-textWhite"
                      }
                    >
                      {option.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            {/* right */}
            <div className="flex flex-col gap-2 md:gap-4 md:flex-1 h-[860px] overflow-y-scroll items-center">
              <div className="ml-6 flex flex-col gap-2 lg:gap-12 text-xs md:text-sm pr-[160px] pl-[120px]">
                <div
                  ref={sectionRefs["page1"]}
                  key={"page1"}
                  className="w-full"
                >
                  <Intro />
                </div>
                <div
                  ref={sectionRefs["page2"]}
                  key={"page2"}
                  className="w-full"
                >
                  <Experience />
                </div>
                <div
                  ref={sectionRefs["page3"]}
                  key={"page3"}
                  className="w-full"
                >
                  <Projects />
                </div>
              </div>
              {/* {selectedMenuOption === "page1" && (
                )} */}
            </div>
          </div>
          {/* nezuko img & social icons */}
          <Nezuko x={mouseCoordinates.x} y={mouseCoordinates.y} />
          <ContactMe handleModalOpen={handleModalOpen} />
          {openModal ? <EmailModal setOpenModal={setOpenModal} /> : null}
        </div>
      )}
    </main>
  );
}
