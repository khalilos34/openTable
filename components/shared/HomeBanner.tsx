import { Search } from "lucide-react";
import { Button } from "../ui/button";

const HomeBanner = () => {
  return (
    <section className="max-w-screen-2xl p-5 h-64 m-auto bg-gradient-to-br from-[#0f1f47] to-[#5f6984] ">
      <div className="text-center mt-5 sm:mt-10">
        <h1 className="font-bold text-2xl sm:text-4xl text-white">
          Find your table for any occasion
        </h1>
        <div className="flex justify-center flex-col sm:flex-row my-5 gap-4">
          <div className="flex items-center bg-white px-4 py-2 gap-x-2 rounded-md">
            <Search className="text-black " />

            <input
              type="text"
              name="search"
              className="outline-none  placeholder:font-light "
              placeholder="Location, Restaurant, Cuisine"
            />
          </div>
          <Button className="bg-red-primary hover:bg-red-primary/80">
            let&apos;s go
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
