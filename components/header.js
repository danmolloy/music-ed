import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import Menu from './menu'

export default function Header({ showMenu, menuShown, signedIn }) {
  return (
    <div className="header">
      <Link href="/">
        <a  className='header-link'>
          Aural Gym
        </a>
      </Link>
        {signedIn &&<button className='menu-icon' onClick={() => showMenu()}>
          {menuShown
          ? <AiOutlineClose />
          : <AiOutlineMenu />}
        </button>}
    </div>
  )
}