import { getAllLocations } from "@/lib/actions/location.action";
import Link from "next/link";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { GrMapLocation } from "react-icons/gr";
import OptionsMenu from "./OptionsMenu";
import { ImSpoonKnife } from "react-icons/im";
import { GiMoneyStack } from "react-icons/gi";
import { getAllCuisins } from "@/lib/actions/cuisine.action";
import { cn } from "@/lib/utils";

const Sidebar = async ({
  searchParams,
}: {
  searchParams: { city?: string; cuisine?: string; price?: string };
}) => {
  const locations = await getAllLocations();
  const cuisins = await getAllCuisins();
  return (
    <div className="w-1/5 hidden sm:block">
      <div className="border-b pb-4 flex flex-col ">
        <div className="flex gap-2  items-center">
          <GrMapLocation size={25} />
          <h1 className="mb-2 text-2xl font-semibold">Region </h1>
        </div>
        <OptionsMenu options={locations} searchParams={searchParams} />
      </div>
      <div className="border-b pb-4 flex flex-col mt-4 ">
        <div className="flex gap-2  items-center">
          <ImSpoonKnife size={25} />

          <h1 className="mb-2 text-2xl font-semibold">Cuisine </h1>
        </div>
        <OptionsMenu options={cuisins} isCuisine searchParams={searchParams} />
      </div>
      <div className="mt-4 pb-4">
        <div className="flex gap-2  items-center">
          <GiMoneyStack size={25} />
          <h1 className="mb-2 text-2xl font-semibold">Price </h1>
        </div>
        <div className="flex">
          <Link
            href={{
              pathname: "/search",
              query: { ...searchParams, price: "CHEAP" },
            }}
            className={cn(
              `  border w-full text-reg font-light text-center rounded-l p-2`,
              searchParams.price === "CHEAP" && "bg-red-primary text-white"
            )}
          >
            $
          </Link>
          <Link
            href={{
              pathname: "/search",
              query: { ...searchParams, price: "REGULAR" },
            }}
            className={cn(
              `border-r border-t border-b w-full text-reg font-light p-2 text-center `,
              searchParams.price === "REGULAR" && "bg-red-primary text-white"
            )}
          >
            $$$
          </Link>
          <Link
            href={{
              pathname: "/search",
              query: { ...searchParams, price: "EXPENSIVE" },
            }}
            className={cn(
              `border-r border-t border-b w-full text-reg font-light p-2 text-center `,
              searchParams.price === "EXPENSIVE" && "bg-red-primary text-white"
            )}
          >
            $$$$
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
