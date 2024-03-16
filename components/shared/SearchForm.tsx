"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

const SearchForm = () => {
  const [input, setInput] = useState("");
  const router = useRouter();
  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.push(`/search?city=${input}`);
    setInput("");
  };
  return (
    <form
      onSubmit={handelSubmit}
      className="flex justify-center flex-col sm:flex-row my-5 gap-4"
    >
      <div className="flex items-center bg-white px-4 py-2 gap-x-2 rounded-md">
        <Search className="text-black " />

        <input
          type="text"
          name="search"
          className="outline-none  placeholder:font-light "
          placeholder="Location, Restaurant, Cuisine"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <Button type="submit" className="bg-red-primary hover:bg-red-primary/80">
        let&apos;s go
      </Button>
    </form>
  );
};

export default SearchForm;
