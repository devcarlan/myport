import Link from 'next/link'

export const Nav = () => {
  const links = [
    { name: 'About', to: '/about' },
    { name: 'Skills', to: '/skills' },
    { name: 'Projects', to: '/projects' },
    { name: 'Contact', to: '/contact' },
  ]

  return (
    <div className='inline-flex min-w-full justify-between items-center py-4'>
      <div className='bg-emerald-600 ml-4 w-8 h-8'></div>
      <div className='px-4 md:hidden'>
        <svg
          className='w-8'
          xmlns='http://www.w3.org/2000/svg'
          class='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          stroke-width='2'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </div>
      <nav className='hidden md:inline-flex justify-between'>
        {links.map((link, i) => (
          <Link key={i} href={link.to} passHref>
            <a className='p-4 text-zinc-800 hover:text-emerald-600'>
              {link.name}
            </a>
          </Link>
        ))}
      </nav>
    </div>
  )
}
