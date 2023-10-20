import Link from "next/link";
import React from "react";

export default function MenuItem({ title, address, ICon }) {
  return (
    <div>
      <Link href={address} className="mx-4 lg:mx-6 hover:text-amber-600">
        <ICon className="text-2xl sm:hidden mx-4"/>
        <p className="hidden sm:inline my-2 font-bold text-xl">{title}</p>
      </Link>
    </div>
  );
}
