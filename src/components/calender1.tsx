"use client";
import { Calendar } from "@/components/ui/calendar";
import React from "react";

const Calender1 = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <div>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    </div>
  );
};

export default Calender1;
