import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'
import logo2 from '../components/shared/imgs/chblaka.png'
import logo3 from '../components/shared/imgs/chcart.png'

export const Nav = () => {
  const links = [
    { name: 'Skills', url: '/#skills' },
    { name: 'Projects', url: '/#projects' },
    { name: 'Contact', url: '/#contact' },
  ]

  const logos = [logo2, logo3]

  const [showMenu, setShowMenu] = useState(false)

  const handleClick = () => {
    setShowMenu(true)
  }

  const onClose = () => {
    setShowMenu(false)
  }

  return (
    <>
      <div className='inline-flex min-w-full justify-between items-center py-4'>
        <div className='ml-4'>
          <Link href='/'>
            <a>
              <Image
                src={logos[Math.floor(Math.random() * logos.length)]}
                layout='intrinsic'
                alt="Carlan's Logo"
                quality='100'
              />
            </a>
          </Link>
        </div>
        <nav className='hidden md:flex '>
          <ul className='md:inline-flex md:justify-between'>
            {links.map((link, i) => (
              <li
                key={i}
                className='mx-4 cursor-pointer text-zinc-800 hover:text-emerald-600'
              >
                <a href={link.url}>{link.name}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className='mr-4 md:hidden'>
          <FaBars size={30} />
        </div>
      </div>
    </>
  )
}
