import Link from "next/link"
import React from "react"
import { BiUser } from "react-icons/bi"

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

interface FooterProps {
  session: Session|any
  signOut: () => void
  signIn: () => void
}

export default function Footer(props: FooterProps) {
  const { session, signOut, signIn } = props
  return (
    <div className='footer' data-testid="footer-div">
        <Link href="/contact" >
          <p className='p-2 text-blue-500 hover:underline hover:cursor-pointer' data-testid="contact-link">Contact Us</p>
        </Link>
      {session 
      ? <button onClick={() => signOut()} className='signin-info' data-testid="user-info">
        <div className='user-icon'>
          <BiUser />
        </div>
        <p>Signed in as {session.user.name}</p>
      </button>
      :<button onClick={() => signIn()} className='signin-info' data-testid="sign-in-link">
        <div className='user-icon'>
          <BiUser />
        </div>
        <p>Sign in</p>
      </button>}
      
      </div>
  )
}