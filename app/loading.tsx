import { Skeleton } from "@/components/ui/skeleton";
const Loading = () => {
  const table = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <section className="max-w-screen-2xl my-8 m-auto p-14">
        <Skeleton className="w-full h-96 bg-slate-200" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-5 gap-y-10 mt-10">
          {table.map((item) => (
            <div key={item}>
              <Skeleton className="w-full h-[400px] bg-slate-200" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Loading;
