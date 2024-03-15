import Image from "next/image";
import { GoStarFill, GoStar } from "react-icons/go";
import { GiNotebook } from "react-icons/gi";

const Carad = ({ src }: { src: string }) => {
  return (
    <div className="flex hover:scale-110 rounded-lg flex-col gap-y-2 broder border-gray-600 p-1  shadow-xl pb-4">
      <div className="w-full  overflow-hidden">
        <Image
          src={src}
          alt="restaurant"
          width={300}
          height={100}
          className="object-cover rounded-lg h-[200px]"
        />
      </div>
      <div className="px-1 flex flex-col gap-y-2">
        <h1 className="font-bold text-gray-700">Uncle makki</h1>
        <div className="flex justify-between pr-2 items-center text-red-primary">
          <div className="flex">
            <GoStarFill size={20} />
            <GoStarFill size={20} />
            <GoStarFill size={20} />
            <GoStarFill size={20} />
            <GoStar size={20} />
          </div>
          <p className="text-gray-800">.87 reviews</p>
        </div>
        <div className="flex items-center gap-x-4">
          <p>Kafteji .</p>
          <p>$$$$ .</p>
          <p>Marsa</p>
        </div>
        <div className="flex gap-x-2 ">
          <GiNotebook size={25} className="text-gray-400" />
          <p>booked 3 times today</p>
        </div>
      </div>
    </div>
  );
};

export default Carad;
