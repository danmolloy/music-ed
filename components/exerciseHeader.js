import Link from "next/link";

export default function ExerciseHeader(props) {
  const { section, sectionLink, name, info } = props;
  return (
    <div className="exercise-header">
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