import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useSelector } from "react-redux";

const AppointmentHistory = () => {
  const appointments = useSelector((state) => state.appointment);
  console.log(appointments);

  return (
    <Table>
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead>Lawyer</TableHead>
          <TableHead>Client</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Time Slot</TableHead>
          <TableHead>Fee</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {appointments.map((data) => (
          <TableRow>
            <TableCell>{data.lawyerName}</TableCell>
            <TableCell>{data.clientName}</TableCell>
            <TableCell>{data.date}</TableCell>
            <TableCell>{data.slot}</TableCell>
            <TableCell>₹ {data.fee}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AppointmentHistory;
