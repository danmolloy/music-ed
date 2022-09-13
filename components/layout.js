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
        <title>Learn Aural</title>
        <meta name="description" content="Learn relative pitch for free." />
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
        <button onClick={() => signOut()}>Sign out</button>
      </div>
      :<div className='signin-info'>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
      </div>}
      
      </div>
    </div>
  )
}