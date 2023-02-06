import Link from "next/link"
import React from "react"
import { BiUser } from "react-icons/bi"

interface FooterProps {
  session: any
  signOut: Function
  signIn: Function
}

export default function Footer(props) {
  const { session, signOut, signIn } = props
  return (
    <div className='footer' data-testid="footer-div">
        <Link href="/contact" >
          <p className='p-2 text-blue-500 hover:underline hover:cursor-pointer' data-testid="contact-link">Contact Us</p>
        </Link>
      {session 
      ? <button onClick={() => signOut()} className='signin-info'>
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