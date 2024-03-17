import { Item } from "@prisma/client";
import MenuCard from "./MenuCard";
import { MdMenuBook } from "react-icons/md";

const Menu = ({ menu }: { menu: Item[] }) => {
  return (
    <main className="bg-white mt-5">
      <div className="mt-4 pb-1 mb-1">
        <div className="flex items-start justify-center gap-x-4">
          <h1 className="font-bold text-center text-4xl mb-8">Menu</h1>
          <MdMenuBook size={30} />
        </div>

        <div className="flex flex-col  ">
          {menu &&
            menu.map((item) => (
              <div key={item.id}>
                <MenuCard item={item} />
              </div>
            ))}
        </div>
      </div>
    </main>
  );
};

export default Menu;
