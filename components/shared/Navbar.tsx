import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex text-reg border-b pb-2">
      <Link href="/restaurant/mekki" className="mr-7">
        Overview
      </Link>
      <Link href="/restaurant/mekki/menu" className="mr-7">
        Menu
      </Link>
    </nav>
  );
};

export default Navbar;
