import Image from "next/image";

const Banner = () => {
  return (
    <div className="h-96 overflow-hidden relative flex justify-center items-center">
      <Image
        src={"/images/rest.jpg"}
        alt="banner"
        width={400}
        height={400}
        className="size-full object-cover"
      />
    </div>
  );
};

export default Banner;
