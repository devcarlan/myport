import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { VscClose } from 'react-icons/vsc'
import Link from 'next/link'
import Image from 'next/image'
import logo2 from '../components/shared/imgs/chblaka.png'
import logo3 from '../components/shared/imgs/chcart.png'

export const Nav = () => {
  const links = [
    { name: 'Skills', url: '/#skills' },
    { name: 'Projects', url: '/projects' },
    { name: 'Contact', url: '/#contact' },
  ]
  const sidelinks = [
    { name: 'Home', url: '/' },
    { name: 'Skills', url: '/#skills' },
    { name: 'Projects', url: '/projects' },
    { name: 'Contact', url: '/#contact' },
  ]

  const logos = [logo2, logo3]

  const [showMenu, setShowMenu] = useState(false)

  const handleShowMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <>
      <div className='inline-flex min-w-full justify-between items-center md:py-4'>
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
        <div className='mr-4 md:hidden' onClick={handleShowMenu}>
          <FaBars size={25} className='hover:cursor-pointer' />
        </div>
      </div>
      <div
        className={
          showMenu
            ? 'fixed left-0 top-0 w-full h-screen bg-black/70 z-[25]'
            : ''
        }
        onClick={handleShowMenu}
      >
        <div
          className={
            showMenu
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen z-50 bg-slate-100 p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 w-[75%] p-10 ease-out duration-500'
          }
          onClick={(e) => e.stopPropagation()}
        >
          <div className='flex items-center justify-between'>
            <Link href='/'>
              <a>
                <Image
                  src={logos[Math.floor(Math.random() * logos.length)]}
                  layout='intrinsic'
                  width={55}
                  height={55}
                  alt="Carlan's Logo"
                  quality='100'
                />
              </a>
            </Link>
            <div onClick={handleShowMenu}>
              <VscClose size={30} className='hover:cursor-pointer' />
            </div>
          </div>
          <nav className='mt-4'>
            <ul className='flex flex-col'>
              {sidelinks.map((link, i) => (
                <li
                  key={i}
                  className='my-4 text-lg cursor-pointer text-zinc-800 hover:text-emerald-600'
                >
                  <a href={link.url}>{link.name}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}
