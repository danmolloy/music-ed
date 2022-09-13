import Link from "next/link";

export default function HomeTile({tileLink, title}) {
  return (
    <Link href={tileLink}>
      <div className="home-link">
        <p >
          {title}
        </p>
      </div>
    </Link>
  )
}