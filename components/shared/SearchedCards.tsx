import { Restaurant } from "@/types";
import Image from "next/image";
import { GoStar, GoStarFill } from "react-icons/go";
import Price from "./Price";
import Link from "next/link";

const SearchedCards = ({ restaurants }: { restaurants: Restaurant[] }) => {
  return (
    <div className="w-5/6 ml-6">
      {/* RESAURANT CAR */}
      {restaurants.map((restaurant) => (
        <div className="border-b flex py-4">
          <Image
            src={restaurant.main_image}
            alt="image"
            width={250}
            height={250}
            className="rounded-xl"
          />
          <div className="pl-5  flex flex-col gap-y-2">
            <h2 className="text-3xl text-blue-primary ">{restaurant.slug}</h2>
            <div className="flex items-start">
              <div className="flex text-yellow-500">
                <GoStarFill size={20} />
                <GoStarFill size={20} />
                <GoStarFill size={20} />
                <GoStarFill size={20} />
                <GoStar size={20} />
              </div>
              <p className="ml-2 text-sm font-semibold">Awesome</p>
            </div>
            <div className="mb-9">
              <div className="font-light flex gap-x-2">
                <Price price={restaurant.price} />
                <p className="mr-4">{restaurant.cuisine.name}</p>
                <p className="mr-4">{restaurant.location.name}</p>
              </div>
            </div>
            <div className="text-red-primary">
              <Link href={`/restaurant/${restaurant.slug}`}>
                View more information
              </Link>
            </div>
          </div>
        </div>
      ))}
      {/* RESAURANT CAR */}
    </div>
  );
};

export default SearchedCards;
