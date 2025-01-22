import { useEffect, useState } from "react";
import { DatePicker } from "./ui/DatePicker";
import { Button } from "./ui/button";
import { addAppointment } from "@/slice/appointmentSlice";
import { format } from "date-fns";
import { useDispatch } from "react-redux";
import { updateAvailability } from "@/slice/lawyerSlice";

const init = {
  lawyerId: null,
  lawyerName: "",
  clientName: "",
  slot: "",
  date: null,
  fee: "null",
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
  "18.00",
  "18.30",
];

const AppointmentForm = ({ lawyer }) => {
  const [appointmentData, setAppointmentData] = useState(init);
  const [date, setDate] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setAppointmentData({
      ...appointmentData,
      lawyerId: lawyer.id,
      lawyerName: lawyer.name,
      fee: lawyer.cost,
    });
  }, []);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name + " : " + value);
    setAppointmentData({ ...appointmentData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!appointmentData.clientName || !date || !appointmentData.slot) {
      alert("Fill all fields!");
      return;
    }

    if (!(date instanceof Date) || isNaN(date)) {
      alert("Invalid Date!");
      return;
    }

    const newDate = format(date, "dd/MM/yyyy");
    setAppointmentData({
      ...appointmentData,
      date: newDate,
    });

    dispatch(addAppointment(appointmentData));
    dispatch(
      updateAvailability({
        lawyerId: lawyer.id,
        date: appointmentData.date,
        time: appointmentData.slot,
      })
    );
  };

  return (
    <form className="flex flex-col gap-4 text-slate-900">
      <div className="flex items-center gap-4">
        <input
          className="border-1 p-2 rounded-md w-full outline-none"
          name="clientName"
          type="text"
          placeholder="Full Name..."
          value={appointmentData.clientName}
          onChange={handleChange}
        />

        <DatePicker date={date} setDate={setDate} />
      </div>

      <div className={`flex flex-wrap items-center gap-4`}>
        {timeSlots.map((slot, index) => (
          <div
            className="flex flex-auto items-center space-x-2 bg-gray-100 hover:bg-slate-800 p-2 rounded-md hover:text-white cursor-pointer"
            key={index}
          >
            <input
              type="radio"
              id={slot}
              name="slot"
              value={slot}
              onChange={handleChange}
            />
            <label htmlFor={slot}>{slot}</label>
          </div>
        ))}
      </div>

      <Button onClick={handleSubmit} className={"w-max px-8"}>
        Submit
      </Button>
    </form>
  );
};

export default AppointmentForm;
