import Image from "next/image";

const Banner = ({ banner }: { banner: string }) => {
  return (
    <div className="h-96 overflow-hidden relative flex justify-center items-center">
      <Image
        src={banner}
        alt="banner"
        width={400}
        height={400}
        className="size-full object-cover"
      />
    </div>
  );
};

export default Banner;
