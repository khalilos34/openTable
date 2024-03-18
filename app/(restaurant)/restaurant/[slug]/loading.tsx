import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const loading = () => {
  return (
    <>
      <main className="bg-gray-100 min-h-screen w-screen ">
        <main className="max-w-screen-2xl m-auto  bg-white">
          <Skeleton className="w-full h-96 bg-slate-200" />
          <div className="flex m-auto w-[75%] justify-between items-start  -mt-11">
            <Skeleton className="bg-slate-200 w-[70%] h-[800px] " />
            <Skeleton className="w-[27%] bg-slate-200  h-[400px]" />
          </div>
        </main>
      </main>
    </>
  );
};

export default loading;
