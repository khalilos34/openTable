import { getAllLocations } from "@/lib/actions/location.action";
import Link from "next/link";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { GrMapLocation } from "react-icons/gr";
import RadioButton from "./RadioButton";
import { ImSpoonKnife } from "react-icons/im";
import { GiMoneyStack } from "react-icons/gi";
import { getAllCuisins } from "@/lib/actions/cuisine.action";

const Sidebar = async () => {
  const locations = await getAllLocations();
  const cuisins = await getAllCuisins();
  return (
    <div className="w-1/5">
      <div className="border-b pb-4 flex flex-col ">
        <div className="flex gap-2  items-center">
          <GrMapLocation size={25} />

          <h1 className="mb-2 text-2xl font-semibold">Region </h1>
        </div>
        <RadioButton options={locations} />
      </div>
      <div className="border-b pb-4 flex flex-col mt-4 ">
        <div className="flex gap-2  items-center">
          <ImSpoonKnife size={25} />

          <h1 className="mb-2 text-2xl font-semibold">Cuisine </h1>
        </div>
        <RadioButton options={cuisins} />
      </div>
      <div className="mt-4 pb-4">
        <div className="flex gap-2  items-center">
          <GiMoneyStack size={25} />

          <h1 className="mb-2 text-2xl font-semibold">Price </h1>
        </div>
        <div className="flex">
          <Link
            href={""}
            className="border w-full text-reg font-light rounded-l p-2"
          >
            $
          </Link>
          <Link
            href={""}
            className="border-r border-t border-b w-full text-reg font-light p-2"
          >
            $$
          </Link>
          <Link
            href={""}
            className="border-r border-t border-b w-full text-reg font-light p-2 rounded-r"
          >
            $$$
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
