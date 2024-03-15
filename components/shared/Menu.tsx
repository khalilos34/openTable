import { Item } from "@prisma/client";
import MenuCard from "./MenuCard";

const Menu = ({ menu }: { menu: Item[] }) => {
  return (
    <main className="bg-white mt-5">
      <div>
        <div className="mt-4 pb-1 mb-1">
          <h1 className="font-bold text-4xl">Menu</h1>

          <div className="flex flex-wrap justify-between">
            {menu &&
              menu.map((item) => (
                <div key={item.id}>
                  <MenuCard item={item} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Menu;
