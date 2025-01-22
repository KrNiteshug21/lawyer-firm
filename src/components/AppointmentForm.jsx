import { useState } from "react";
import { DatePicker } from "./ui/DatePicker";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

const init = {
  lawyerId: null,
  lawyerName: "",
  clientName: "",
  slot: "",
  fee: null,
  status: "Upcoming",
};

const timeSlots = [
  "09.00",
  "09.30",
  "10.00",
  "10.30",
  "11.00",
  "11.30",
  "12.00",
  "13.00",
  "13.30",
  "14.00",
  "14.30",
  "15.00",
  "17.00",
  "17.30",
];

const AppointmentForm = () => {
  const [appointmentData, setAppointmentData] = useState(init);
  const [date, setDate] = useState();
  const handleClick = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAppointmentData({ ...appointmentData, [name]: value });
  };

  return (
    <form className="flex flex-col gap-4 w-96">
      <input
        className="border-2 p-2 rounded-md w-full sm:w-96 outline-none"
        name="name"
        type="text"
        placeholder="Full Name..."
        value={appointmentData.clientName}
      />
      <DatePicker date={date} setDate={setDate} />
      <RadioGroup className={"flex flex-wrap gap-4"} defaultValue="option-one">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((slot) => (
          <div
            key={slot}
            className="flex items-center space-x-2 bg-gray-300 hover:bg-blue-600 p-2 rounded-md hover:text-white cursor-pointer"
          >
            <RadioGroupItem
              name={"fee"}
              onChange={handleClick}
              value={slot}
              id={slot}
            />
            <Label htmlFor={slot}>10.00</Label>
          </div>
        ))}
      </RadioGroup>
    </form>
  );
};

export default AppointmentForm;
