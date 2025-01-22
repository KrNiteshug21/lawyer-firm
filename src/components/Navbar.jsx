import React from "react";
import { Link } from "react-router";
import SectionWrapper from "./SectionWrapper";

const Navbar = () => {
  return (
    <nav className="top-0 sticky bg-slate-800 py-2 text-lg text-white">
      <SectionWrapper className="flex justify-between items-center">
        <div className="text-xl">
          <Link to={"/"}>Lawyer Firm</Link>
        </div>
        <div className="flex items-center gap-2">
          <Link className="hover:bg-slate-700 px-2 py-1 rounded-md" to="/">
            Home
          </Link>
          <Link
            className="hover:bg-slate-700 px-2 py-1 rounded-md"
            to="/lawyers"
          >
            Lawyers
          </Link>
        </div>
      </SectionWrapper>
    </nav>
  );
};

export default Navbar;
