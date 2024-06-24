"use client";

import Image from "next/image";
import React, { useState, Dispatch, SetStateAction } from "react";
import BoxBgLarge from "@/assets/box-bg-large.svg";
import Input from "./Input";
import {
  BsInstagram,
  BsWhatsapp,
  BsLinkedin,
  BsFillEnvelopeCheckFill,
  BsFillEnvelopeXFill,
} from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import Loading from "./Loading";

type DataObject = {
  name: string;
  email: string;
  subject: string;
  content: string;
};

const EmailModal = ({
  setOpenModal,
}: {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}) => {
  const [details, setDetails] = useState<DataObject>({
    name: "",
    email: "",
    subject: "",
    content: "",
  });

  const [validationErrors, setValidationErrors] = useState<Partial<DataObject>>(
    {}
  );
  const [mailSent, setMailSent] = useState(false);
  const [mailRes, setMailRes] = useState(false);
  const [mailStatus, setMailStatus] = useState(true);

  const handleSubmit = async () => {
    // Validate fields before submitting
    const errors: Partial<DataObject> = {};
    if (!details.name) {
      errors.name = "Name is required";
    }
    if (!details.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(details.email)) {
      errors.email = "Email is invalid";
    }
    if (!details.subject) {
      errors.subject = "Subject is required";
    }

    // If there are validation errors, stop submission
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    setMailStatus(false);

    const mailResponse = await fetch("/api/send-mail", {
      method: "POST",
      body: JSON.stringify(details),
    });

    const resData = await mailResponse.json();
    setMailStatus(true);
    setMailSent(true);
    setMailRes(resData.status);
  };

  const handleCloseModal = () => {
    setOpenModal((current) => !current);
  };

  return (
    <div className="fixed left-0 top-0 z-[1000] h-screen overflow-y-scroll w-screen items-center flex justify-center">
      <div
        className="absolute w-full h-full bg-[rgba(0,0,0,0.9)]"
        onClick={() => handleCloseModal()}
      />
      {/* content */}
      <div className="relative w-[90vw] lg:w-[70vw] border-[1px] min-h-[70vh] max-h-[90vh] overflow-y-scroll border-white rounded-lg m-4 bg-[rgba(0,0,0,0.6)]">
        {/* content_bg */}
        <Image
          className="absolute h-full w-full opacity-40"
          src={BoxBgLarge}
          height={620}
          width={1024}
          alt={"bg-large"}
        />
        {/* content_title */}
        <p className="font-bold text-md md:text-lg text-center pt-4 lg:pt-6">
          Contact Me
        </p>
        <MdCancel
          className="duration-300 cursor-pointer fixed top-2 right-2 text-md hover:text-primary text-white"
          onClick={() => handleCloseModal()}
        />
        <div className="relative z-[1001] w-full p-4 lg:p-8 flex flex-col-reverse lg:flex-row justify-around items-center gap-6 text-white">
          {/* content_form */}
          <div className="flex flex-1 w-full lg:flex-[0.7] flex-col gap-4 items-center justify-between">
            <Input
              id={"name"}
              type={"input"}
              title={"Name"}
              value={details.name}
              setter={setDetails}
              errorMessage={validationErrors.name}
            />
            <Input
              id={"email"}
              type={"input"}
              title={"Email"}
              value={details.email}
              setter={setDetails}
              errorMessage={validationErrors.email}
            />
            <Input
              id={"subject"}
              type={"input"}
              title={"Subject"}
              value={details.subject}
              setter={setDetails}
              errorMessage={validationErrors.subject}
            />
            <Input
              id={"content"}
              type={"textarea"}
              title={"Content"}
              value={details.content}
              setter={setDetails}
            />
            <div className="mt-2 md:mt-4 flex gap-4 items-center justify-center">
              <button
                className="duration-300 p-[4px_32px] border-[1px] border-white rounded-lg font-semibold hover:bg-primary hover:text-bgCol"
                onClick={() => handleSubmit()}
              >
                Submit
              </button>
              {!mailStatus ? (
                <Loading />
              ) : mailSent ? (
                <div>
                  {mailRes ? (
                    <BsFillEnvelopeCheckFill className="inline-block duration-300 text-base text-green-400" />
                  ) : (
                    <BsFillEnvelopeCheckFill className="hidden" />
                  )}
                  {!mailRes ? (
                    <BsFillEnvelopeXFill className="inline-block text-base duration-300 text-red-500" />
                  ) : (
                    <BsFillEnvelopeXFill className="hidden" />
                  )}
                </div>
              ) : null}
            </div>
          </div>
          {/* social_info */}
          <div className="flex flex-col items-center gap-1 md:gap-2">
            <Image
              className="w-28 h-28 md:w-40 md:h-40 lg:w-52 lg:h-52 rounded-full border-[2px] border-white md:p-2"
              src={
                "https://res.cloudinary.com/dwxylnkvd/image/upload/v1718454568/profile_qansub.png"
              }
              width={2048}
              height={2048}
              alt="hero"
            />
            <p className="text-base md:text-md font-semibold">Pragati</p>
            <p className="text-textLight text-xs md:text-sm">
              {"#product_designer #ui/ux_designer"}
            </p>
            <div className="mt-2 flex gap-8 items-center text-white">
              <a href="https://wa.me/+918123342761?text=Hello">
                <BsWhatsapp className="hover:text-primary text-base md:text-md" />
              </a>
              <a href="https://www.linkedin.com/in/pragati-k-1b6b82187/">
                <BsLinkedin className="hover:text-primary text-base md:text-md" />
              </a>
              <a href="https://instagram.com/pragati.__jain">
                <BsInstagram className="hover:text-primary text-base md:text-md" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailModal;
