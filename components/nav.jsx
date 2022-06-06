import Link from 'next/link'

export const Nav = () => {
  const links = [
    { name: 'About', to: '/about' },
    { name: 'Skills', to: '/skills' },
    { name: 'Projects', to: '/projects' },
    { name: 'Contact', to: '/contact' },
  ]

  return (
    <div className='lg:inline-flex min-w-full justify-between items-center'>
      <div className='bg-emerald-600 ml-4 w-8 h-8'></div>
      <nav className='inline-flex justify-between'>
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
