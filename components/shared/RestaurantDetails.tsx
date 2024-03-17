"use client";
import React from "react";
import { BiMessage } from "react-icons/bi";
import { CiMoneyBill } from "react-icons/ci";
import { GoStar, GoStarFill } from "react-icons/go";
import { PiForkKnife } from "react-icons/pi";
import Navbar from "./Navbar";
import { Restaurant } from "@/types";
import Image from "next/image";
import ReviewCard from "./ReviewCard";
import { calculateReviewRating } from "@/utils/calculations";
import Stars from "./Stars";

const RestaurantDetails = ({ restaurant }: { restaurant: Restaurant }) => {
  return (
    <div className="bg-white w-[70%] rounded p-3 shadow relative">
      <Navbar slug={restaurant.slug} />
      <div className="mt-4 border-b pb-6">
        <h1 className="font-bold text-6xl">{restaurant?.name}</h1>
      </div>
      <div className="flex items-end justify-around">
        <div className=" mt-2 flex items-center text-red-primary">
          <Stars reviews={restaurant.reviews} />
          <p className="text-reg ml-3">
            {calculateReviewRating(restaurant.reviews).toFixed(1)}
          </p>
        </div>
        <div className="flex items-center gap-1">
          <BiMessage size={25} />
          <p className="text-reg">
            {restaurant.reviews.length > 0
              ? ` ${restaurant.reviews.length} reviews`
              : "0 review"}
          </p>
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
      <div>
        <h1 className="font-bold text-3xl mt-10 mb-7 borber-b pb-5">
          {restaurant.reviews.length > 0
            ? `What ${restaurant.reviews.length} people are saying`
            : "there are no reviews"}
        </h1>
        {restaurant.reviews.length > 0 &&
          restaurant.reviews.map((review) => (
            <div key={review.id}>
              <ReviewCard review={review} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default RestaurantDetails;
