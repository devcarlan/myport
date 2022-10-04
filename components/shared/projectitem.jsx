import Link from 'next/link'
import { SkillPill } from './skillpill'

export const ProjectItem = ({ name, link, image, skills }) => {
  return (
    <div
      className={`m-4 flex flex-col items-center shadow-md hover:cursor-pointer`}
    >
      <Link href={link}>
        <div
          className={`p-4 w-72 h-72 rounded-lg flex flex-col justify-center items-center ${image}`}
        >
          <p className='text-lg font-bold text-center text-white'>{name}</p>

          <div className='mt-1 flex flex-wrap items-center'>
            {skills.map((skill, i) => (
              <SkillPill key={i} skill={skill} />
            ))}
          </div>
        </div>
      </Link>
    </div>
  )
}
