"use client";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { use, useState } from "react";

import Link from "next/link";
import NotificationPanel from "./NotificationPanel";
import ShoppingCard from "./ShoppingCard";
import ProfilePanel from "./ProfilePanel";

const NavIcons = () => {
  const router = useRouter();

  const isLoading = false;

  const handleCheckout = () => {
    // Checkout logic here
  };

  {
    /* set authentication manually */
  }
  const isLoggedin = false;

  const handleProfile = () => {
    if (!isLoggedin) {
      router.push("/login");
    }
  };
  return (
    <div className="flex justify-between gap-4 xl:gap-6">
      <ProfilePanel />
      <NotificationPanel />
      <ShoppingCard />
    </div>
  );
};

export default NavIcons;
