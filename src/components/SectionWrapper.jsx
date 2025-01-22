import React from "react";

const SectionWrapper = ({ children, className = "" }) => {
  return (
    <div className={`${className} px-4 mx-auto max-w-screen-xl`}>
      {children}
    </div>
  );
};

export default SectionWrapper;
