import Head from 'next/head'
import Header from './header'
import { useSession, signIn, signOut } from "next-auth/react"
import Menu from './menu'
import { useState } from 'react'
import Footer from './footer'
import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}



export default function Layout(props: LayoutProps) {
  const [showMenu, setShowMenu] = useState(false)
  const { data: session } = useSession<any>()
  const { children } = props

  return (
    <div className="layout" data-testid="layout-div">
      <Head>
        <title>Aural Gymnasium</title>
        <meta name="description" content="The Aural Gymnasium is a completely free resource for musicians to develop their relative pitch and chord recognition." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header showMenu={() => setShowMenu(!showMenu)} menuShown={showMenu} signedIn={session ? true : false}/>
      {showMenu && <Menu session={session}/>}
      <div className='flex flex-col w-screen min-h-screen p-2 items-center' data-testid="main-div">
        {children}
      </div>
      <Footer session={session} signOut={() => signOut()} signIn={() => signIn()}/>
    </div>
  )
}