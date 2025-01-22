import React from "react";
import SectionWrapper from "./SectionWrapper";
import { Button } from "./ui/button";
import { Link } from "react-router";

const LandingPage = () => {
  return (
    <SectionWrapper>
      <div className="place-content-center grid min-h-screen text-center">
        <div className="space-y-2 max-w-[600px]">
          <h2 className="font-semibold text-6xl">
            Find the right lawyer in minutes!
          </h2>
          <p className="text-lg">
            Book appointments with top lawyers specializing in various fields,
            all from the comfort of your home.
          </p>
          <Link to={"/lawyers"}>
            <Button className={"mt-4"}>Get started</Button>
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default LandingPage;
