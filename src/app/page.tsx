"use client";
import NextIcon from "@/assets/next-arrow.svg";
import PrevIcon from "@/assets/prev-arrow.svg";
import Typed from "react-typed";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useRecoilState } from "recoil";
import { storePage } from "./recoil/atoms/storePage";
import Title from "@/components/Title";
import Sasuke from "@/components/Sasuke";
import ContactMe from "@/components/ContactMe";
import EmailModal from "@/components/EmailModal";
// import sound from ;
export default function Home() {
  // variable decleration
  const router = useRouter();
  const pageRoute = {
    prev: 0,
    current: 1,
    next: 2,
  };

  const roles = ["Frontend Developer", "Backend Developer", "UI/UX Designer"];
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
      "ml-6 flex flex-col gap-2 lg:gap-4 text-xs md:text-sm md:max-h-[640px] overflow-y-scroll",
    content_right_about_span: "text-textWhite",
    routeIcons:
      "fixed top-0 left-0 h-screen w-full flex justify-between items-center pl-3 pr-3 md:pl-8 md:pr-8",
    content_sasuke:
      "relative w-auto md:absolute md:bottom-2 md:left-14 p-sm pb-0 md:p-md md:pb-0 lg:p-lg lg:pb-0 mt-12 z-10",
  };
  // useStates
  const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 });
  const [page, setPage] = useRecoilState(storePage);
  const [motionConfig, setMotionConfig] = useState({
    initial: { opacity: 0, x: 200 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -200 },
    transition: { duration: 0.5 },
  });
  const [isLoading, setIsLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    let config = {
      initial: { opacity: 0, x: 200 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -200 },
      transition: { duration: 0.5 },
    };
    if (page === pageRoute.prev) {
      config.initial = { opacity: 0, x: 200 };
      config.animate = { opacity: 1, x: 0 };
      config.exit = { opacity: 0, x: -200 };
      config.transition = { duration: 0.5 };
    } else if (page === pageRoute.next) {
      config.initial = { opacity: 0, x: -200 };
      config.animate = { opacity: 1, x: 0 };
      config.exit = { opacity: 0, x: 200 };
      config.transition = { duration: 0.5 };
    }
    setMotionConfig(config);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return;
  }, [page]);

  useEffect(() => {
    setIsLoading(false);
  }, [motionConfig]);

  const handleMouseMove = (event: {
    clientX: number;
    clientY: number;
  }): void => {
    const { clientX, clientY } = event;
    setMouseCoordinates({ x: clientX, y: clientY });
  };

  function handlePrevClick(): void {
    setPage(pageRoute.current);
    router.push("/");
  }

  function handleNextClick(): void {
    setPage(pageRoute.current);
    router.push("/Experience");
  }

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
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      ) : (
        <motion.div
          initial={motionConfig.initial}
          animate={motionConfig.animate}
          exit={motionConfig.exit}
          transition={motionConfig.transition}
        >
          <div
            className="duration-300 relative flex flex-col ml-6 mr-6 md:ml-0 md:mr-0 min-h-screen overflow-y-scroll justify-center items-center p-sm pt-16 md:p-md lg:p-lg select-none"
            onMouseMove={handleMouseMove}
          >
            <div className="z-[3] w-full">
              {/* page title */}
              <Title pageNo={"01"} title={"Intro"} />
            </div>
            {/* content */}
            <div className="text-textLight flex flex-col mt-12 md:mt-0 gap-16 md:flex-row md:items-center justify-between relative z-[2]">
              {/* left */}
              <div className="flex flex-col flex-[0.8] lg-flex-[0.7] gap-4">
                <p className="text-xs md:text-sm text-primary">{"<title>"}</p>
                <div className="ml-4 md:ml-6">
                  <p className="text-md md:text-lg lg:text-xxl mb-1 md:mb-0 font-bold text-textWhite">
                    Animesh Jha
                  </p>
                  {/* <p className={styles.content_left_subtitle}>
                    Full Stack Web Developer
                  </p> */}
                  <Typed
                    className="text-sm md:text-base lg:text-md font-medium text-textWhite"
                    strings={roles}
                    typeSpeed={160}
                    loop
                  />
                  <p className="text-xs md:text-sm mt-2 md:mt-3">
                    Weaving digital wonders with code, creativity, and a touch
                    of magic.
                  </p>
                </div>
                <p className="text-xs md:text-sm text-primary">{"</title>"}</p>
              </div>
              {/* right */}
              <div className="flex flex-col gap-4 md:flex-[0.95] lg:flex-[0.65]">
                <p className="text-xs md:text-sm text-primary">{"<about>"}</p>
                <div className="ml-4 md:ml-6 flex flex-col gap-2 lg:gap-4 text-xs md:text-sm md:max-h-[640px] overflow-y-scroll">
                  <p>
                    {`Welcome to my digital space, where innovation meets efficiency, and creativity merges with functionality. As a seasoned Full Stack MERN Developer with three years of professional experience, I bring a wealth of expertise to the table, ensuring your projects not only meet but exceed expectations.`}
                  </p>
                  <p>
                    {/* {`<span className={styles.content_right_about_span}>MNC</span>, a{" "}`} */}
                    {`My journey in the tech realm has been diverse and dynamic, encompassing a spectrum of cutting-edge technologies and methodologies. From harnessing the power of MERN stack to seamlessly integrating CMS solutions, I thrive on crafting bespoke applications tailored to your unique needs.`}
                  </p>
                  <p>
                    {`At the core of my philosophy lies a passion for problem-solving and a dedication to exceeding expectations. From architecting robust architectures to fine-tuning database queries, every project is a testament to my commitment to excellence.`}
                  </p>
                  <p>
                    {`As a leader, I thrive on orchestrating teams towards success, fostering a culture of collaboration and innovation, empowering teams to unleash their full potential and deliver solutions that inspire. Together, let's embark on a journey of digital transformation, where challenges are opportunities and success knows no bounds.  `}
                    <span
                      className={
                        styles.content_right_about_span +
                        " font-semibold text-base"
                      }
                    >
                      {":)"}
                    </span>
                  </p>
                </div>
                <p className="text-xs md:text-sm text-primary">{"</about>"}</p>
              </div>
            </div>
            {/* prev - next icons */}
            <div className="fixed top-0 left-0 h-screen w-full flex justify-between items-center pl-3 pr-3 md:pl-8 md:pr-8">
              <Image
                className={
                  pageRoute.prev !== 0
                    ? " z-[3] visible cursor-pointer hover:w-9 hover:h-9 w-8 h-8 rounded-full overflow-hidden duration-300"
                    : "invisible"
                }
                width={100}
                height={100}
                src={PrevIcon}
                alt={"next"}
                onClick={() => handlePrevClick()}
              />
              <Image
                className={
                  pageRoute.next !== 0
                    ? "visible z-[3] cursor-pointer hover:w-9 hover:h-9 w-8 h-8 rounded-full overflow-hidden duration-300"
                    : "invisible"
                }
                width={100}
                height={100}
                src={NextIcon}
                onClick={() => handleNextClick()}
                alt={"next"}
              />
            </div>
            {/* sasuke img & social icons */}
            <Sasuke x={mouseCoordinates.x} y={mouseCoordinates.y} />
            <ContactMe handleModalOpen={handleModalOpen} />
            {openModal ? <EmailModal setOpenModal={setOpenModal} /> : null}
          </div>
        </motion.div>
      )}
    </main>
  );
}
