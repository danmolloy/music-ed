import Link from "next/link"
import React from "react"

interface MenuProps {
  userId: string
}


export default function Menu(props: MenuProps) {
  const { userId } = props

  const menuItems = [
    {
      key: 1,
      title: "About",
      link: "/about",
    },
    {
      key: 2,
      title: "Exercises",
      link: "/exercises",
    },
    {
      key: 3,
      title: "My Progress",
      link: `/user/${userId}`,
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