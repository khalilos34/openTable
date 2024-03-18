import Image from "next/image";
import { GoStarFill, GoStar } from "react-icons/go";
import { GiNotebook } from "react-icons/gi";
import { RestauranCardType } from "@/types";
import Link from "next/link";
import Stars from "./Stars";

const Carad = ({ restaurant }: { restaurant: RestauranCardType }) => {
  const price: any = {
    REGULAR: "$$$",
    EXPENSIVE: "$$$$",
    CHEAP: "$",
  };
  return (
    <div className="flex hover:scale-110 rounded-lg flex-col gap-y-2 border border-gray-600 p-1  shadow-xl pb-4">
      <Link href={`/restaurant/${restaurant.slug}`}>
        <div className="w-full  overflow-hidden">
          <Image
            src={restaurant.main_image}
            alt="restaurant"
            width={300}
            height={100}
            className="object-cover rounded-lg h-[200px]"
          />
        </div>
        <div className="px-1 flex flex-col gap-y-2">
          <h1 className="font-bold text-gray-700">{restaurant.name}</h1>
          <div className="flex justify-between pr-2 items-center text-red-primary">
            <div className="flex">
              <Stars reviews={restaurant.reviews} />
            </div>
            <p className="text-gray-800">
              .
              {restaurant.reviews.length > 0
                ? `${restaurant.reviews.length} reviews`
                : " 0 review"}{" "}
            </p>
          </div>
          <div className="flex items-center gap-x-4">
            <p>{restaurant.cuisine.name}</p>
            <p>{price[restaurant.price]}</p>
            <p>{restaurant.location.name}</p>
          </div>
          <div className="flex gap-x-2 ">
            <GiNotebook size={25} className="text-gray-400" />
            <p>booked 3 times today</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Carad;
