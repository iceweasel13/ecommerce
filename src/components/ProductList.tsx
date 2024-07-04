import React from "react";
import Link from "next/link";
import Image from "next/image";
const ProductList = () => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link
        href={"list"}
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] "
      >
        <div className="relative w-full h-80">
          <Image
            src={
              "https://static.bershka.net/4/photos2/2024/I/0/1/p/4293/423/400/cecf0c6b798ad434fbca3a1110f99f8c-4293423400_1_1_0.jpg?imwidth=850&impolicy=bershka-itxmediumhigh"
            }
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src={
              "https://static.bershka.net/4/photos2/2024/I/0/1/p/4293/423/400/45f9374c259ff1021d85f8b35dcad8d2-4293423400_2_1_0.jpg?imwidth=1920&impolicy=bershka-itxmedium"
            }
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span>Sapka</span>
          <span>€19.99</span>
        </div>
        <div className="text-sm text-gray-500">
          High quality hat
        </div>
        <button className="rounded-2xl ring-1 ring-red-400 text-red-400 w-max py-2 px-4 text-xs hover:bg-red-400 hover:text-white">
          Add to Cart
        </button>
      </Link>
      <Link
        href={"list"}
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] "
      >
        <div className="relative w-full h-80">
          <Image
            src={
              "https://static.bershka.net/4/photos2/2024/I/0/1/p/4293/423/400/cecf0c6b798ad434fbca3a1110f99f8c-4293423400_1_1_0.jpg?imwidth=850&impolicy=bershka-itxmediumhigh"
            }
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src={
              "https://static.bershka.net/4/photos2/2024/I/0/1/p/4293/423/400/45f9374c259ff1021d85f8b35dcad8d2-4293423400_2_1_0.jpg?imwidth=1920&impolicy=bershka-itxmedium"
            }
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span>Sapka</span>
          <span>€19.99</span>
        </div>
        <div className="text-sm text-gray-500">
          High quality hat
        </div>
        <button className="rounded-2xl ring-1 ring-red-400 text-red-400 w-max py-2 px-4 text-xs hover:bg-red-400 hover:text-white">
          Add to Cart
        </button>
      </Link>
      <Link
        href={"list"}
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] "
      >
        <div className="relative w-full h-80">
          <Image
            src={
              "https://static.bershka.net/4/photos2/2024/I/0/1/p/4293/423/400/cecf0c6b798ad434fbca3a1110f99f8c-4293423400_1_1_0.jpg?imwidth=850&impolicy=bershka-itxmediumhigh"
            }
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src={
              "https://static.bershka.net/4/photos2/2024/I/0/1/p/4293/423/400/45f9374c259ff1021d85f8b35dcad8d2-4293423400_2_1_0.jpg?imwidth=1920&impolicy=bershka-itxmedium"
            }
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span>Sapka</span>
          <span>€19.99</span>
        </div>
        <div className="text-sm text-gray-500">
          High quality hat
        </div>
        <button className="rounded-2xl ring-1 ring-red-400 text-red-400 w-max py-2 px-4 text-xs hover:bg-red-400 hover:text-white">
          Add to Cart
        </button>
      </Link>
      <Link
        href={"list"}
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] "
      >
        <div className="relative w-full h-80">
          <Image
            src={
              "https://static.bershka.net/4/photos2/2024/I/0/1/p/4293/423/400/cecf0c6b798ad434fbca3a1110f99f8c-4293423400_1_1_0.jpg?imwidth=850&impolicy=bershka-itxmediumhigh"
            }
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src={
              "https://static.bershka.net/4/photos2/2024/I/0/1/p/4293/423/400/45f9374c259ff1021d85f8b35dcad8d2-4293423400_2_1_0.jpg?imwidth=1920&impolicy=bershka-itxmedium"
            }
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span>Sapka</span>
          <span>€19.99</span>
        </div>
        <div className="text-sm text-gray-500">
          High quality hat
        </div>
        <button className="rounded-2xl ring-1 ring-red-400 text-red-400 w-max py-2 px-4 text-xs hover:bg-red-400 hover:text-white">
          Add to Cart
        </button>
      </Link>
    </div>
  );
};

export default ProductList;
