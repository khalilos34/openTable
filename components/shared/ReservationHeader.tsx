import { displayTimeObject } from "@/utils/convertToDisplayTime";
import { format } from "date-fns";
import Image from "next/image";

const ReservationHeader = ({
  slug,
  date,
  time,
  partySize,
  src,
}: {
  slug: string;
  date: string;
  time: string;
  partySize: string;
  src: string;
}) => {
  return (
    <div>
      <h3 className="font-bold">You&apos;re almost done!</h3>
      <div className="mt-5 flex">
        <Image
          src={src}
          alt="logo"
          width={175}
          height={200}
          className="rounded object-cover"
        />
        <div className="ml-4">
          <h1 className="text-3xl font-bold">{slug}</h1>
          <div className="flex mt-3">
            <p className="mr-6">{format(new Date(date), "cccc ,MMM d")}</p>
            <p className="mr-6">{displayTimeObject[time]}</p>
            <p className="mr-6">{partySize} people</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationHeader;
