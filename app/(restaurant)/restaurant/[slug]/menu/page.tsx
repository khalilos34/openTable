import Banner from "@/components/shared/Banner";
import ReservationForm from "@/components/shared/ReservationForm";
import RestaurantOverview from "@/components/shared/RestaurantOverview";
import React from "react";

const page = () => {
  return (
    <main className="bg-gray-100 min-h-screen w-screen ">
      <main className="max-w-screen-2xl m-auto  bg-white">
        <Banner />
        <div className="flex m-auto w-2/3 justify-between items-start  -mt-11">
          <RestaurantOverview />
          <ReservationForm />
        </div>
      </main>
    </main>
  );
};

export default page;
