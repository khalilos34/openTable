"use client";
import { partySize as partySizes, times } from "@/constants";
import { useAvailability } from "@/hooks/useAvailability";
import { displayTimeObject } from "@/utils/convertToDisplayTime";
import Link from "next/link";
import { useState } from "react";
import DatePicker from "react-datepicker";

const ReservationForm = ({
  open_time,
  close_time,
  slug,
}: {
  open_time: string;
  close_time: string;
  slug: string;
}) => {
  const [partySize, setPartySize] = useState("2");
  const [time, setTime] = useState(open_time);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [day, setDay] = useState(new Date().toISOString().split("T")[0]);
  const { loading, error, data, fetchAvailability } = useAvailability();
  const handleChangeDate = (date: Date) => {
    if (date) {
      setDay(date.toISOString().split("T")[0]);
      return setSelectedDate(date);
    }

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
  const handelFindingTime = () => {
    fetchAvailability({ partySize, day, time, slug });
  };

  return (
    <div className=" w-full md:w-[27%] my-10  md:my-0 flex-col flex items-center justify-center relative ">
      <div className=" md:w-[20%] w-1/2  bg-white md:fixed rounded p-3 shadow">
        <div className="text-center border-b pb-2 font-bold">
          <h4 className="mr-7 text-lg">Make a Reservation {time}</h4>
        </div>
        <div className="my-3 flex flex-col">
          <label htmlFor="">Party size</label>
          <select
            className="py-3 border-b font-light"
            value={partySize}
            onChange={(e) => setPartySize(e.target.value)}
          >
            {partySizes.map((party) => (
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
              minDate={new Date()}
              dateFormat="MMMM dd"
              wrapperClassName="w-[48%]"
            />
          </div>
          <div className="flex flex-col w-[48%]">
            <label htmlFor="">Time</label>
            <select
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="py-3 border-b font-light"
            >
              {filterOpenTimes().map((time) => (
                <option value={time.time} key={time.time}>
                  {time.displayTime}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mt-3">
          <button
            disabled={loading}
            onClick={handelFindingTime}
            className="bg-red-600 rounded w-full px-4 text-white font-bold h-16"
          >
            {loading ? "searching..." : "Find a Time"}
          </button>
        </div>
        {data && data.length ? (
          <div className="mt-2 flex-col items-start justify-center">
            <p className="my-2">select a time</p>
            <div className="flex flex-wrap gap-2 justify-evenly items-center">
              {data.map((t) =>
                t.availability ? (
                  <Link
                    className="bg-red-600 rounded-sm cursor-pointer p-2 text-center text-white"
                    href={`/reserve/${slug}?date=${day}&time=${time}&partySize=${partySize}`}
                  >
                    {displayTimeObject[t.time]}
                  </Link>
                ) : (
                  <div className="bg-gray-300 w-20 h-10 p-2"></div>
                )
              )}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ReservationForm;
