import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import SectionWrapper from "./SectionWrapper";
import { Badge } from "./ui/badge";
import { IndianRupee, Star, User } from "lucide-react";
import { Button } from "./ui/button";
import AppointmentForm from "./AppointmentForm";
import AppointmentHistory from "./AppointmentHistory";

const AppointmentPage = () => {
  const { id } = useParams();
  const lawyers = useSelector((state) => state.lawyers);
  const lawyer = lawyers.find((l) => l.id.toString() === id);
  console.log("lawyer", lawyer);

  const [toggleAppointment, setToggleAppointment] = useState(false);

  const handleClick = () => {
    setToggleAppointment(!toggleAppointment);
  };

  return (
    <div>
      <SectionWrapper className="min-h-screen">
        <div className="mt-2">
          <img
            src={lawyer.img}
            alt={lawyer.name}
            className="rounded-md w-full h-[75vh] object-center object-cover"
          />
        </div>

        <div className="flex flex-wrap justify-around items-center gap-4 mt-4">
          <h2 className="flex flex-auto items-center gap-2 text-xl">
            <User />
            <span>Name:</span> <span>{lawyer.name}</span>
          </h2>
          <p className="flex flex-auto items-center gap-2 text-lg">
            <Star fill="yellow" strokeWidth={0} />
            <span>{lawyer.rating}</span>
          </p>
          <p className="flex flex-auto items-center gap-1 text-xl">
            <span>Fee: </span>
            <IndianRupee size={18} />
            <span className="">{lawyer.cost}</span>
            <span className="">per 30-min</span>
          </p>
          <div className="flex-auto">
            <Badge>{lawyer.speciality} Lawyer</Badge>
          </div>
        </div>

        <div className="space-y-4 my-10 min-h-screen">
          <h2 className="font-semibold text-3xl">
            Lawyer Appointment Management
          </h2>

          <div className="space-x-2 bg-gray-300 p-2 rounded-md w-max">
            <Button
              onClick={handleClick}
              variant={toggleAppointment ? "secondary" : "default"}
            >
              Book Appoinment
            </Button>
            <Button
              onClick={handleClick}
              variant={toggleAppointment ? "default" : "secondary"}
            >
              Appointment History
            </Button>
          </div>

          {toggleAppointment ? (
            <AppointmentHistory />
          ) : (
            <AppointmentForm lawyer={lawyer} />
          )}
        </div>
      </SectionWrapper>
    </div>
  );
};

export default AppointmentPage;
