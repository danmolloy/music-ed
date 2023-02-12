import Link from "next/link";
import React from "react";

interface ChallengeTileProps {
  challenge: {
    name: string
    info: string
    key: string
    numberQs: number
    range: string
    intervals?: number[]
    direction: string
    exLink?: string
  }
  path: string
}

export default function ChallengeTile(props: ChallengeTileProps) {
  const { challenge, path } = props
  return (
    <Link href={challenge.exLink ?`/${path}/${challenge.exLink.toLowerCase()}` : `/${path}/${challenge.name.toLowerCase()}`}>
      <div data-testid="challenge-tile-div" className="home-tile">
          <h2 className="font-semibold">{challenge.name}</h2>
          <p className="font-thin">{challenge.info}</p>
      </div>
    </Link>
  )
}