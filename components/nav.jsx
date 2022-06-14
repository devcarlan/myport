import Link from 'next/link'

export const Nav = () => {
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    })
  }

  const links = [
    { name: 'Skills', url: '#skills' },
    { name: 'Projects', url: '#projects' },
    { name: 'Contact', url: '#contact' },
  ]

  return (
    <div className='inline-flex min-w-full justify-between items-center py-4'>
      <div className='bg-emerald-600 ml-4 w-8 h-8'></div>
      <div className='px-4 md:hidden'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-8 w-8'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth='2'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </div>
      <nav className='hidden md:flex '>
        <ul className='md:inline-flex md:justify-between'>
          {links.map((link, i) => (
            <li
              key={i}
              className='mx-4 cursor-pointer text-zinc-800 hover:text-emerald-600'
            >
              <Link href={link.url} passHref>
                <a>{link.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
