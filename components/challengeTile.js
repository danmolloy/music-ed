import Link from "next/link";

export default function ChallengeTile({ challenge, path }) {
  return (
    <Link href={challenge.exLink ?`/${path}/${challenge.exLink.toLowerCase()}` : `/${path}/${challenge.name.toLowerCase()}`}>
      <div className="w-full m-2 p-2 border shadow lg:w-1/2 ">
          <h2 className="font-semibold">{challenge.name}</h2>
          <p className="font-thin">{challenge.info}</p>

      </div>
    </Link>
  )
}