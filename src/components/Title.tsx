"use client";
import React from "react";

const Title = ({ pageNo, title }: { pageNo: string; title: string }) => {
  // style decleration
  const styles = {
    pageTitle: "absolute top-0 left-0 p-sm md:p-md lg:p-lg",
    pageTitle_p: "text-textWhite text-base md:text-md font-medium",
    pageTitle_p_span: "text-textLight",
  };
  return (
    <div className={styles.pageTitle}>
      <p className={styles.pageTitle_p}>
        {pageNo} <span className={styles.pageTitle_p_span}>- {title}</span>
      </p>
    </div>
  );
};

export default Title;
