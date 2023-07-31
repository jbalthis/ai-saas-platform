"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div
      className="
        space-y-4
        py-4
        flex
        flex-col
        h-full
        bg-[#111827]
        text-white
    "
    >
      <div className="flex-1 px-3 py-2">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <Image
              fill
              alt="Logo"
              src=""
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
