import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import Menu from './menu'
import React from 'react'

interface HeaderProps {
  showMenu: Function
  menuShown: boolean
  signedIn: boolean
}

export default function Header(props: HeaderProps) {
  const { showMenu, menuShown, signedIn } = props
  return (
    <div className="header" data-testid="header-div">
      <Link href="/">
        <h1  className='header-link' data-testid="header-title">
          Aural Gym
        </h1>
      </Link>
        {signedIn &&<button className='menu-icon' data-testid="menu-icon" onClick={() => showMenu()}>
          {menuShown
          ? <AiOutlineClose />
          : <AiOutlineMenu />}
        </button>}
    </div>
  )
}