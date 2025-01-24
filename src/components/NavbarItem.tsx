'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavbarItem = ({ title, param }: { title: string; param: string }) => {
  const genre = usePathname().split("/")[2];
  return (
    <div>
      <Link
        href={`/top/${param}`}
        className={`hover:text-amber-600 font-bold duration-150 ${
          param === genre
            ? "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
            : ""
        } `}
      >
        {title}
      </Link>
    </div>
  );
};

export default NavbarItem;
