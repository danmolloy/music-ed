import Head from 'next/head'
import Header from './header'
import { useSession, signIn, signOut } from "next-auth/react"
import Menu from './menu'
import { AiFillGithub } from 'react-icons/ai'
import { useState } from 'react'
import { BiUser } from 'react-icons/bi'
import Link from 'next/link'
import Footer from './footer'
import React from 'react'



export default function Layout(props) {
  const [showMenu, setShowMenu] = useState(false)
  const { data: session } = useSession()
  const { children } = props

  return (
    <div className="layout ">
      <Head>
        <title>Aural Gymnasium</title>
        <meta name="description" content="The Aural Gymnasium is a completely free resource for musicians to develop their relative pitch and chord recognition." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header showMenu={() => setShowMenu(!showMenu)} menuShown={showMenu} signedIn={session ? true : false}/>
      {showMenu && <Menu userId={session.userData.id}/>}
      <div className='flex flex-col w-screen min-h-screen p-2 items-center' data-testid="main-div">
        {children}
      </div>
      <Footer session={session} signOut={() => signOut()} signIn={() => signIn()}/>
    </div>
  )
}