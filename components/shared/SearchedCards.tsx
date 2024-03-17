import { Restaurant } from "@/types";
import Image from "next/image";
import Price from "./Price";
import Link from "next/link";
import { calculateReviewRating } from "@/utils/calculations";
import Stars from "./Stars";

const SearchedCards = ({ restaurants }: { restaurants: Restaurant[] }) => {
  const convertRatingtoText = (rating: number) => {
    if (rating > 4) return "Awesome";
    if (rating > 3 && rating <= 4) return "Good";
    if (rating <= 3) return "Average";
  };
  return (
    <div className="w-5/6 ml-6">
      {/* RESAURANT CAR */}
      {restaurants.map((restaurant) => (
        <div
          className="border-b flex flex-col sm:flex-row py-4"
          key={restaurant.id}
        >
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
                <Stars reviews={restaurant.reviews} />
              </div>
              <p className="ml-2 text-sm font-semibold">
                {calculateReviewRating(restaurant.reviews).toFixed(1)}
              </p>
              <p className="ml-2 text-sm font-semibold">
                {convertRatingtoText(calculateReviewRating(restaurant.reviews))}
              </p>
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
