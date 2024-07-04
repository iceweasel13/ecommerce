"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
const SearchBar = () => {
  const router = useRouter();
  const handleSearch = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    router.push(`/list/${name}`);
    console.log(name);
  };
  return (
    <form
      className="flex items-center justify-between flex-1 gap-4 bg-gray-100 p-2 rounded-md"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        name="name"
        placeholder="Search"
        className="focus:outline-none w-full bg-transparent flex-1"
      />
      <button className="cursor-pointer">
        <Image
          src={"/search.png"}
          alt="search"
          width={18}
          height={18}
        />
      </button>
    </form>
  );
};

export default SearchBar;
