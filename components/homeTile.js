import Link from "next/link";

export default function HomeTile({tileLink, title}) {
  return (
    <Link href={tileLink}>
      <button className="home-link">
          {title}
      </button>
    </Link>
  )
}