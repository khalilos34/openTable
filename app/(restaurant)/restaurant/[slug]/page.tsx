import Banner from "@/components/shared/Banner";
import ReservationForm from "@/components/shared/ReservationForm";
import RestaurantDetails from "@/components/shared/RestaurantDetails";
import { getRestaurantBySlug } from "@/lib/actions/restaurant.actions";
import { Restaurant } from "@/types";

import React from "react";

const RestaurantDetailsPage = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const restaurantData = await getRestaurantBySlug(params.slug);
  if (!restaurantData) return;
  return (
    <main className="bg-gray-100 min-h-screen w-screen ">
      <main className="max-w-screen-2xl m-auto  bg-white">
        <Banner banner={restaurantData?.main_image} />
        <div className="flex m-auto w-[75%] justify-between items-start  -mt-11">
          <RestaurantDetails restaurant={restaurantData as Restaurant} />
          <ReservationForm
            open_time={restaurantData?.open_time}
            close_time={restaurantData?.close_time}
          />
        </div>
      </main>
    </main>
  );
};

export default RestaurantDetailsPage;
