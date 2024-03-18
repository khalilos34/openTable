"use client";
import { partySize, times } from "@/constants";
import { useState } from "react";
import DatePicker from "react-datepicker";

const ReservationForm = ({
  open_time,
  close_time,
}: {
  open_time: string;
  close_time: string;
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const handleChangeDate = (date: Date) => {
    if (date) return setSelectedDate(date);
    return setSelectedDate(null);
  };
  const filterOpenTimes = () => {
    const openTimes: typeof times = [];
    let isOpen = false;
    times.forEach((time) => {
      if (time.time === open_time) {
        isOpen = true;
      }
      if (isOpen) {
        openTimes.push(time);
      }
      if (time.time === close_time) {
        isOpen = false;
      }
    });
    return openTimes;
  };

  return (
    <div className="w-[27%] relative ">
      <div className=" w-[20%] bg-white fixed rounded p-3 shadow">
        <div className="text-center border-b pb-2 font-bold">
          <h4 className="mr-7 text-lg">
            Make a Reservation {open_time}:::{close_time}
          </h4>
        </div>
        <div className="my-3 flex flex-col">
          <label htmlFor="">Party size</label>
          <select name="" className="py-3 border-b font-light" id="">
            {partySize.map((party) => (
              <option value={party.value} key={party.value}>
                {party.label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col w-[48%]">
            <label htmlFor="">Date</label>
            <DatePicker
              selected={selectedDate}
              onChange={handleChangeDate}
              className="py-3 font-light w-28 border-b "
              dateFormat="MMMM dd"
              wrapperClassName="w-[48%]"
            />
          </div>
          <div className="flex flex-col w-[48%]">
            <label htmlFor="">Time</label>
            <select name="" id="" className="py-3 border-b font-light">
              {filterOpenTimes().map((time) => (
                <option value={time.time} key={time.time}>
                  {time.displayTime}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mt-3">
          <button className="bg-red-600 rounded w-full px-4 text-white font-bold h-16">
            Find a Time
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReservationForm;
