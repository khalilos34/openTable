import Carad from "@/components/shared/Carad";
import HomeBanner from "@/components/shared/HomeBanner";
import { getAllRestaurant } from "@/lib/actions/restaurant.actions";

export default async function Home() {
  const restaurants = await getAllRestaurant();

  return (
    <main>
      <HomeBanner />
      <section className="max-w-screen-2xl my-8 m-auto p-14">
        <h1 className="text-3xl  font-bold text-center text-blue-primary ">
          Find Somthing To Eat
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-5 gap-y-10 mt-10">
          {restaurants &&
            restaurants.map((restaurant) => (
              <div key={restaurant.id}>
                <Carad restaurant={restaurant} />
              </div>
            ))}
        </div>
      </section>
    </main>
  );
}
