import Link from 'next/link'

export const ProjectItem = ({ name, link, image }) => {
  console.log(image)
  return (
    <div
      className={`m-4 flex flex-col items-center shadow-md hover:cursor-pointer`}
    >
      <Link href={link}>
        <div className={`p-4 w-64 h-64 flex flex-col justify-between ${image}`}>
          <p className='text-lg font-bold text-white'>{name}</p>
          <div className='flex items-center'></div>
        </div>
      </Link>
    </div>
  )
}
