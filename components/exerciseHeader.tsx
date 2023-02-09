import Link from "next/link";
import React from "react";

interface ExerciseHeaderProps {
  section: string
  sectionLink: string
  name: string
  info: string
}

export default function ExerciseHeader(props: ExerciseHeaderProps) {
  const { section, sectionLink, name, info } = props;
  return (
    <div className="exercise-header" data-testid="ex-header-div">
        <Link href={sectionLink} >
          <button className="">
            <h2 className="text-gray-400 hover:text-blue-400">{section}</h2>
          </button>
        </Link>
        <h1 className="font-semibold">{name}</h1>
        <p className="font-thin">{info}</p>
      </div>
  )
}