import Link from "next/link"

export default function Menu(props) {


  const menuItems = [
    {
      key: 1,
      title: "About",
      link: "/",
    },
    {
      key: 2,
      title: "Exercises",
      link: "/exercises",
    },
    {
      key: 3,
      title: "My Progress",
      link: `/user/${props.userId}`,
    },
    {
      key: 4,
      title: "Contact",
      link: "/contact",
    },
  ]

  return (
    <div className="menu">
      <div className="menu-list">
        {menuItems.map(i => (
          <Link key={i.key} href={i.link}>
            <h3 className="menu-items">
              {i.title}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  )
}