import SearchForm from "@/components/shared/SearchForm";
import SearchedCards from "@/components/shared/SearchedCards";
import Sidebar from "@/components/shared/Sidebar";
import {
  getRestaurantByLocation,
  getRestaurantByQuery,
} from "@/lib/actions/restaurant.actions";

const SearchPage = async ({
  searchParams,
}: {
  searchParams: { city?: string; cuisine?: string; price?: string };
}) => {
  const restaurants = await getRestaurantByQuery(searchParams);

  return (
    <main className="bg-gray-100 min-h-screen w-screen ">
      <main className="max-w-screen-2xl m-auto  bg-white">
        <div className="bg-gradient-to-r to-[#5f6984] from-[#0f1f47] p-2">
          <div className="text-left text-lg py-3 m-auto flex justify-center">
            <SearchForm />
          </div>
        </div>
        <div className="flex py-4 m-auto w-[85%] gap-x-10 justify-between items-start">
          <Sidebar searchParams={searchParams} />
          <SearchedCards restaurants={restaurants} />
        </div>
      </main>
    </main>
  );
};

export default SearchPage;
