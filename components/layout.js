import Head from 'next/head'
import Header from './header'
import { useSession, signIn, signOut } from "next-auth/react"
import Menu from './menu'
import { AiFillGithub } from 'react-icons/ai'
import { useState } from 'react'

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
        <a className='github-link'>
          <AiFillGithub />
        </a>
      {session 
      ? <div className='signin-info'>
        Signed in as {session.user.name} <br />
        <button onClick={() => signOut()} className='text-sm shadow p-1 text-white bg-blue-500 hover:bg-blue-400 active:bg-blue-500'>Sign out</button>
      </div>
      :<div className='signin-info'>
        <p className='text-sm'>Not signed in </p>
        <button onClick={() => signIn()} className='text-sm shadow p-1 text-white bg-blue-500 hover:bg-blue-400 active:bg-blue-500'>Sign in or Sign up</button>
      </div>}
      
      </div>
    </div>
  )
}