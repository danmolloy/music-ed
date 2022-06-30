import Link from 'next/link'
import { GiHamburgerMenu } from 'react-icons/gi'

export default function Header() {
  return (
    <div className="header">
      <Link href="/">
        <a  className='header-link'>
          music-ed
        </a>
      </Link>
      <button className='menu-icon'>
        <GiHamburgerMenu />
      </button>
    </div>
  )
}