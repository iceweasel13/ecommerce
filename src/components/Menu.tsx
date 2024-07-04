"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <Image
        src="/menu.png"
        alt="menu"
        height={28}
        width={28}
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-90 z-50">
          <div className="flex justify-end p-4">
            <Image
              src="/x.png"
              alt="close"
              height={28}
              width={28}
              className="cursor-pointer"
              onClick={() => setOpen(false)}
            />
          </div>
          <div className="flex flex-col items-center justify-center h-full ">
            <Link href="/" className="p-4">
              Homepage
            </Link>
            <Link href="/shop" className="p-4">
              Shop
            </Link>
            <Link href="/deals" className="p-4">
              Deals
            </Link>
            <Link href="/about" className="p-4">
              About
            </Link>
            <Link href="/contact" className="p-4">
              Contact
            </Link>
            <Link href="/contact" className="p-4">
              Logout
            </Link>
            <Link href="/contact" className="p-4">
              Cart (1)
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
