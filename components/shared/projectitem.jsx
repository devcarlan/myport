import Link from 'next/link'

export const ProjectItem = ({ name, link, image }) => {
  return (
    <div className={`w-52 h-52 bg-${image}`}>
      <Link href={link}>
        <div className='m-4 flex flex-col items-center shadow-lg hover:cursor-pointer'>
          {name}
        </div>
      </Link>
    </div>
  )
}
