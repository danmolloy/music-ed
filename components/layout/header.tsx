import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import Menu from './menu'
import React from 'react'

interface HeaderProps {
  showMenu: Function
  menuShown: boolean
  signedIn: boolean
  signIn: () => void
}

export default function Header(props: HeaderProps) {
  const { showMenu, menuShown, signedIn, signIn} = props
  return (
    <div className=" h-16 flex flex-row items-center justify-between" data-testid="header-div">
      <Link href="/">
        <h1  className='text-black p-2' data-testid="header-title">
          Aural<span className='text-blue-600 font-semibold'>Gym</span>
        </h1>
      </Link>
      {!signedIn 
      ? <div className='flex flex-row'>
          <Link href="/about">
            <button className='hover:bg-slate-100 text-slate-600 text-sm p-1 m-1 rounded'>
              About
            </button>
          </Link>
          
          
            <button onClick={() => signIn()} className='hover:bg-slate-100 text-slate-600 text-sm p-1 m-1 rounded'>
              Sign in
            </button>
         <Link href="/contact">
          <button className='hover:bg-slate-100 text-slate-600 text-sm p-1 m-1 rounded'>
              Contact
            </button>
            </Link>
        </div>
        :<button className='hover:bg-slate-100 rounded-full p-2 m-1 text-lg' data-testid="menu-icon" onClick={() => showMenu()}>
          {menuShown
          ? <AiOutlineClose />
          : <AiOutlineMenu />}
        </button>}
    </div>
  )
}