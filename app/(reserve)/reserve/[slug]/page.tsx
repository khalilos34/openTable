import { getRestaurantBySlug } from "@/lib/actions/restaurant.actions";
import Image from "next/image";

const ReservationPage = async ({
  searchParams,
}: {
  searchParams: { slug: string; date: string; partySize: string; time: string };
}) => {
  const restaurant = await getRestaurantBySlug(searchParams.slug);
  if (!restaurant) return null;
  return (
    <div className="border-t h-screen">
      <div className="py-9 w-3/5 m-auto flex flex-col items-center justify-center">
        {/* HEADER */}
        <div>
          <h3 className="font-bold">You're almost done!</h3>
          <div className="mt-5 flex">
            <Image
              src={restaurant?.main_image}
              alt="logo"
              width={32}
              height={18}
              className="w-32 h-18 rounded"
            />
            <div className="ml-4">
              <h1 className="text-3xl font-bold">{searchParams.slug}</h1>
              <div className="flex mt-3">
                <p className="mr-6">{searchParams.date}</p>
                <p className="mr-6">{searchParams.time}</p>
                <p className="mr-6">{searchParams.partySize} people</p>
              </div>
            </div>
          </div>
        </div>
        {/* HEADER */} {/* FORM */}
        <div className="mt-10 flex flex-wrap justify-between w-[660px]">
          <input
            type="text"
            className="border rounded p-3 w-80 mb-4"
            placeholder="First name"
          />
          <input
            type="text"
            className="border rounded p-3 w-80 mb-4"
            placeholder="Last name"
          />
          <input
            type="text"
            className="border rounded p-3 w-80 mb-4"
            placeholder="Phone number"
          />
          <input
            type="text"
            className="border rounded p-3 w-80 mb-4"
            placeholder="Email"
          />
          <input
            type="text"
            className="border rounded p-3 w-80 mb-4"
            placeholder="Occasion (optional)"
          />
          <input
            type="text"
            className="border rounded p-3 w-80 mb-4"
            placeholder="Requests (optional)"
          />
          <button className="bg-red-600 w-full p-3 text-white font-bold rounded disabled:bg-gray-300">
            Complete reservation
          </button>
          <p className="mt-4 text-sm">
            By clicking “Complete reservation” you agree to the OpenTable Terms
            of Use and Privacy Policy. Standard text message rates may apply.
            You may opt out of receiving text messages at any time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReservationPage;
