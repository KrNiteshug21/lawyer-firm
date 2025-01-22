import React from "react";
import {
  Table,
  TableBody,
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
          <TableRow key={data.id}>
            <TableCell>{data.lawyerName}</TableCell>
            <TableCell>{data.clientName}</TableCell>
            <TableCell className={"text-left"}>{data.selectedDate}</TableCell>
            <TableCell>{data.slot}</TableCell>
            <TableCell>₹ {data.fee}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AppointmentHistory;
