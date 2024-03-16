import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Cuisine, Location } from "@prisma/client";
import Link from "next/link";

const RadioButton = ({ options }: { options: Cuisine[] | Location[] }) => {
  return (
    <div className="flex items-start justify-center px-4 my-2 flex-col gap-2">
      {options.map((option) => (
        <div key={option.id}>
          <Link
            href={option.name}
            className="text-xl font-normal capitalize hover:underline "
          >
            {option.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RadioButton;
