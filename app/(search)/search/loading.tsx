import SearchForm from "@/components/shared/SearchForm";
import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
  const table = [1, 2, 3, 4, 5];
  return (
    <>
      <main className="bg-gray-100 min-h-screen w-screen ">
        <main className="max-w-screen-2xl m-auto  bg-white">
          <div className="bg-gradient-to-r to-[#5f6984] from-[#0f1f47] p-2">
            <div className="text-left text-lg py-3 m-auto flex justify-center">
              <SearchForm />
            </div>
          </div>
          <div className="flex py-4 m-auto w-[85%] gap-x-10 justify-between items-start">
            <div className="w-1/5 hidden sm:block">
              <div className="border-b pb-4 flex flex-col gap-y-3 ">
                {table.map((t) => (
                  <Skeleton key={t} className="h-4 w-[250px] g-slate-200" />
                ))}
              </div>
              <div className="border-b pb-4 flex flex-col gap-y-3 ">
                {table.map((t) => (
                  <Skeleton key={t} className="h-4 w-[250px] g-slate-200" />
                ))}
              </div>
              <div className="border-b pb-4 flex flex-col gap-y-3 ">
                {table.map((t) => (
                  <Skeleton key={t} className="h-4 w-[250px] g-slate-200" />
                ))}
              </div>
            </div>
            <div className="flex flex-col  gap-y-2 w-5/6 ml-6">
              {table.map((t) => (
                <Skeleton key={t} className=" bg-slate-200 w-full h-[200px]" />
              ))}
            </div>
          </div>
        </main>
      </main>
    </>
  );
};

export default loading;
