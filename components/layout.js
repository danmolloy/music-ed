import Head from 'next/head'
import Header from './header'
import { useSession, signIn, signOut } from "next-auth/react"
import Menu from './menu'
import { AiFillGithub } from 'react-icons/ai'
import { useState } from 'react'
import { BiUser } from 'react-icons/bi'
import Link from 'next/link'

export default function Layout({ children }) {
  const [showMenu, setShowMenu] = useState(false)
  const { data: session } = useSession()

  return (
    <div className="layout">
      <Head>
        <title>Aural Gymnasium</title>
        <meta name="description" content="The Aural Gymnasium is a completely free resource for musicians to develop their relative pitch and chord recognition." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header showMenu={() => setShowMenu(!showMenu)} menuShown={showMenu} signedIn={session ? true : false}/>
      {showMenu && <Menu userId={session.userData.id}/>}
      <div className='children-div'>
        {children}
      </div>
      <div className='footer'>
        <Link href="/contact" >
          <p className='p-2 text-blue-500 hover:underline hover:cursor-pointer'>Contact Us</p>
        </Link>
      {session 
      ? <button onClick={() => signOut()} className='signin-info'>
        <div className='user-icon'>
          <BiUser />
        </div>
        <p>Signed in as {session.user.name}</p>
      </button>
      :<button onClick={() => signIn()} className='signin-info'>
        <div className='user-icon'>
          <BiUser />
        </div>
        <p>Sign in</p>
      </button>}
      
      </div>
    </div>
  )
}