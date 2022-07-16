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
        <div className='mr-4 md:hidden' onClick={handleClick}>
          <FaBars size={30} />
        </div>
      </div>
      <div
        className={
          showMenu
            ? 'fixed left-0 top-0 w-full h-screen bg-black/70 z-[25]'
            : 'hidden'
        }
        onClick={onClose}
      >
        <div
          className='fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen z-50 bg-[#ecf0f3] p-10 ease-in duration-500'
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
            <div onClick={onClose}>
              <VscClose size={30} />
            </div>
          </div>
          <nav className='mt-4'>
            <ul className='flex flex-col'>
              {links.map((link, i) => (
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
