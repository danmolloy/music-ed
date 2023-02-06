import Link from "next/link";
import React from "react";

export default function HomeTile(props: {tileLink: string, title: string}) {
  const { tileLink, title } = props
  return (
    <Link href={tileLink}>
      <button className="w-1/3 lg:w-1/4 rounded border p-4 m-2 font-extrabold text-center hover:bg-blue-50 active:bg-blue-100 hover:cursor-pointer">
          {title}
      </button>
    </Link>
  )
}