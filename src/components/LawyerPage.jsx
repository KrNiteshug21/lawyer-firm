import React from "react";
import SectionWrapper from "./SectionWrapper";
import { useSelector } from "react-redux";
import { Badge } from "./ui/badge";
import { IndianRupee, Star, Calendar } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router";

const LawyerInfo = ({ lawyer }) => {
  console.log("lawyer", lawyer);

  return (
    <div className="border-2 p-4 rounded-md">
      <div className="mb-1">
        <img
          src={lawyer.img}
          className="rounded-md w-full h-[250px] object-center object-cover"
        />
      </div>
      <div className="space-y-2">
        <h3 className="text-4xl">{lawyer.name}</h3>
        <div className="flex items-center gap-8">
          <Badge>{lawyer.speciality} Lawyer</Badge>
          <p className="flex items-center gap-2 text-lg">
            <Star fill="yellow" strokeWidth={0} />
            <span>{lawyer.rating}</span>
          </p>
        </div>
        <p className="flex items-center">
          <IndianRupee />
          <span className="text-3xl">{lawyer.cost}</span>
          <span className="mt-2 ml-2">per 30-min</span>
        </p>
        <Link to={`/lawyers/${lawyer.id}`}>
          <Button className={"mt-2"}>
            <Calendar />
            <span>Book Appointment</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

const LawyerPage = () => {
  const lawyers = useSelector((state) => state.lawyers);

  return (
    <div>
      <SectionWrapper className="mb-10">
        <h2 className="mx-auto my-4 text-2xl text-center">Lawyers</h2>
        <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {lawyers.map((lawyer) => (
            <LawyerInfo key={lawyer.id} lawyer={lawyer} />
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
};

export default LawyerPage;
