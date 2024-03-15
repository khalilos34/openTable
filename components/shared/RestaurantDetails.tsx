"use client";
import React from "react";
import { BiMessage } from "react-icons/bi";
import { CiMoneyBill } from "react-icons/ci";
import { GoStar, GoStarFill } from "react-icons/go";
import { PiForkKnife } from "react-icons/pi";
import Navbar from "./Navbar";
import { Restaurant } from "@/types";
import Image from "next/image";

const RestaurantDetails = ({ restaurant }: { restaurant: Restaurant }) => {
  return (
    <div className="bg-white w-[70%] rounded p-3 shadow relative">
      <Navbar slug={restaurant.slug} />
      <div className="mt-4 border-b pb-6">
        <h1 className="font-bold text-6xl">{restaurant?.name}</h1>
      </div>
      <div className="flex items-end justify-around">
        <div className=" mt-2 flex items-center text-red-primary">
          <GoStarFill size={20} />
          <GoStarFill size={20} />
          <GoStarFill size={20} />
          <GoStarFill size={20} />
          <GoStar size={20} />
          <p className="text-reg ml-3">4.9</p>
        </div>
        <div className="flex items-center gap-1">
          <BiMessage size={25} />
          <p className="text-reg">600 Reviews</p>
        </div>
        <div className="flex items-center gap-1">
          <CiMoneyBill size={25} />

          <p className="text-reg">{restaurant?.price}</p>
        </div>
        <div className="flex items-center gap-1">
          <PiForkKnife size={25} />
          <p className="text-reg">{restaurant.cuisine.name}</p>
        </div>
      </div>
      {/* RATING */} {/* DESCRIPTION */}
      <div className="mt-8">
        <p className="font-semibold">
          top tags:
          <span className="rounded-full py-1 cursor-pointer  capitalize font-normal px-2 mx-2 border border-gray-300">
            Great fo creating coktails
          </span>
          <span className="rounded-full py-1 cursor-pointer capitalize font-normal px-2 mx-2 border border-gray-300">
            fancy
          </span>
        </p>
      </div>
      <div className="mt-4">
        <p className="text-lg font-light">{restaurant.description}</p>
      </div>
      {/* DESCRIPTION */} {/* IMAGES */}
      <div>
        <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
          {restaurant.images.length} phots
        </h1>
        <div className="flex flex-wrap">
          {restaurant.images.map((image: any) => (
            <Image
              key={image}
              src={image}
              alt="images"
              width={200}
              height={200}
              className="w-56 h-44 mr-1 mb-1"
            />
          ))}
        </div>
      </div>
      {/* IMAGES */} {/* REVIEWS */}
      <div>
        <h1 className="font-bold text-3xl mt-10 mb-7 borber-b pb-5">
          What 100 people are saying
        </h1>
        <div>
          {/* REVIEW CARD */}
          <div className="border-b pb-7 mb-7">
            <div className="flex">
              <div className="w-1/6 flex flex-col items-center">
                <div className="rounded-full bg-blue-400 w-16 h-16 flex items-center justify-center">
                  <h2 className="text-white text-2xl">MJ</h2>
                </div>
                <p className="text-center">Micheal Jordan</p>
              </div>
              <div className="ml-10 w-5/6">
                <div className="flex items-center">
                  <div className="flex mr-5">*****</div>
                </div>
                <div className="mt-5">
                  <p className="text-lg font-light">
                    Laurie was on top of everything! Slow night due to the snow
                    storm so it worked in our favor to have more one on one with
                    the staff. Delicious and well worth the money.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* REVIEW CARD */}
        </div>
      </div>
      {/* REVIEWS */}
    </div>
  );
};

export default RestaurantDetails;
