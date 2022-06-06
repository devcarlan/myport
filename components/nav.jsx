import Link from 'next/link'

export const Nav = () => {
  const links = [
    { name: 'About', to: '/about' },
    { name: 'Skills', to: '/skills' },
    { name: 'Projects', to: '/projects' },
  ]

  return (
    <div className='lg:inline-flex'>
      {links.map((link, i) => (
        <Link key={i} href={link.to} passHref>
          <a className='text-zinc-800 hover:text-emerald-600'>{link.name}</a>
        </Link>
      ))}
    </div>
  )
}

export default Nav
