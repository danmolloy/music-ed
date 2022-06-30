import Link from "next/link";

export default function ChallengeTile({ challenge, path }) {
  return (
    <Link href={challenge.exLink ?`/${path}/${challenge.exLink.toLowerCase()}` : `/${path}/${challenge.name.toLowerCase()}`}>
      <a className="tile">
        <div>
          <h2 className="font-semibold">{challenge.name}</h2>
          <p className="font-thin">{challenge.info}</p>
        </div>

      </a>
    </Link>
  )
}