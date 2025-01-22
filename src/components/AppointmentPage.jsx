import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import SectionWrapper from "./SectionWrapper";
import { Badge } from "./ui/badge";
import { IndianRupee, Star, User } from "lucide-react";
import { DatePicker } from "./ui/DatePicker";

const AppointmentPage = () => {
  const { id } = useParams();
  const lawyers = useSelector((state) => state.lawyers);
  const lawyer = lawyers.find((l) => l.id.toString() === id);
  const [date, setDate] = useState();
  // const slots = date && lawyers.availability[date];

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

        <form className="flex flex-col gap-4 my-6 w-96 min-h-screen">
          <h2 className="font-semibold text-xl">Appointment</h2>
          <input
            className="border-2 p-2 rounded-md w-full sm:w-96 outline-none"
            name="name"
            type="text"
            placeholder="Full Name..."
          />
          <DatePicker date={date} setDate={setDate} />
          <div className="flex flex-wrap gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((slot) => (
              <div
                className="bg-neutral-200 hover:bg-blue-600 p-2 rounded hover:text-white transition duration-150"
                key={slot}
              >
                10.00
              </div>
            ))}
          </div>
        </form>
      </SectionWrapper>
    </div>
  );
};

export default AppointmentPage;
