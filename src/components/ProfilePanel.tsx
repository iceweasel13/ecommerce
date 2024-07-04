import React from "react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "../components/ui/dropdown-menu";
import Link from "next/link";

const ProfilePanel = () => {
  const handleProfile = () => {
    console.log("Profile clicked");
  };

  const isLoggedin = true; // This should be based on actual login status

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="relative">
          <Image
            src="/profile.png"
            alt="profile"
            width={22}
            height={22}
            onClick={handleProfile}
            className="cursor-pointer"
          />
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-36 bg-white p-4 flex flex-col items-center justify-center ">
        <DropdownMenuItem className="outline-none cursor-pointer">
          <Link
            href="/profile"
            className="font-semibold text-sm text-black"
          >
            Profile
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator className="bg-black" />

        <DropdownMenuItem className="outline-none cursor-pointer font-semibold text-sm text-black">
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfilePanel;
