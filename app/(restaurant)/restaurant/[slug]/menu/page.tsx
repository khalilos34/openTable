import Banner from "@/components/shared/Banner";
import Menu from "@/components/shared/Menu";
import Navbar from "@/components/shared/Navbar";
import ReservationForm from "@/components/shared/ReservationForm";
import { getRestaurantMenusItems } from "@/lib/actions/restaurant.actions";
import React from "react";

const MenuPage = async ({ params }: { params: { slug: string } }) => {
  const { items, main_image } = await getRestaurantMenusItems(params.slug);
  return (
    <main className="bg-gray-100 min-h-screen w-screen mb-96 ">
      <main className="max-w-screen-2xl m-auto  bg-white">
        <Banner banner={main_image} />
        <div className="flex m-auto w-2/3 justify-between items-start  -mt-11">
          <div className="bg-white w-[70%] rounded p-3 shadow relative">
            <Navbar slug={params.slug} />

            <Menu menu={items} />
          </div>
        </div>
      </main>
    </main>
  );
};

export default MenuPage;
