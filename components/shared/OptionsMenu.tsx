import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { Cuisine, Location } from "@prisma/client";
import Link from "next/link";

const OptionsMenu = ({
  options,
  isCuisine,
  searchParams,
}: {
  options: Cuisine[] | Location[];
  isCuisine?: boolean;
  searchParams: { city?: string; cuisine?: string; price?: string };
}) => {
  return (
    <div className="flex items-start justify-center px-4 my-2 flex-col gap-2">
      {options.map((option) => (
        <div key={option.id} className="relative">
          <Link
            href={{
              pathname: `/search`,
              query: isCuisine
                ? { ...searchParams, cuisine: option.name }
                : { ...searchParams, city: option.name },
            }}
            className="text-xl font-normal capitalize  after:block after:content-[''] after:absolute after:h-[3px] after:bg-red-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
          >
            {option.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default OptionsMenu;
