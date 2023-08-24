"use client";

import React, { useState } from "react";
import { ImMail4 } from "react-icons/im";

const ContactMe = ({ handleModalOpen }: { handleModalOpen: () => void }) => {
  return (
    <div
      className="fixed right-4 bottom-10 lg:right-10 lg:bottom-10 z-[3] cursor-pointer"
      onClick={() => handleModalOpen()}
    >
      <ImMail4 className="duration-300 hover:text-primary w-8 h-8 md:w-10 md:h-10" />
    </div>
  );
};

export default ContactMe;
