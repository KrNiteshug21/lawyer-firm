import React from "react";

const SectionWrapper = ({ children, className = "" }) => {
  return (
    <section className={`${className} mx-auto max-w-screen-lg`}>
      {children}
    </section>
  );
};

export default SectionWrapper;
