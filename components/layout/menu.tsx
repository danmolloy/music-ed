import Link from "next/link"
import React from "react"

interface CompletedExercise {
  id: string
  ascDesc: "Ascending"|"Descending"
  exCategory: string
  exName: string
  elapsedTime: number
  date: string
  score: number
  pointsAwarded: null|number
  userEmail: string
}

interface Session {
  user: {
    name: string
    email: string
    image: string
    expires: string
    userData: {
      id: string
      name: string
      email: string
      emailVerified: null|boolean
      image: string
      completedExercises: CompletedExercise[]
    }
  }
}


export default function Menu(props: {session: Session}) {
  const { session } = props

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
      link: `/user/${session.user.userData.id}`,
    },
    {
      key: 4,
      title: "Contact",
      link: "/contact",
    },
  ]
  

  return (
    <div className="menu" data-testid="menu-div">
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