import SearchForm from "./SearchForm";

const HomeBanner = () => {
  return (
    <section className="max-w-screen-2xl p-5 h-64 m-auto bg-gradient-to-br from-[#0f1f47] to-[#5f6984] ">
      <div className="text-center mt-5 sm:mt-10">
        <h1 className="font-bold text-2xl sm:text-4xl text-white">
          Find your table for any occasion
        </h1>
        <SearchForm />
      </div>
    </section>
  );
};

export default HomeBanner;
