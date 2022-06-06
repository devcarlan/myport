import Image from 'next/image'
import css from '../components/shared/imgs/css3.jpg'
import html from '../components/shared/imgs/html5.jpg'
import js from '../components/shared/imgs/javascript.jpg'
import react from '../components/shared/imgs/react.jpg'
import tw from '../components/shared/imgs/tailwind-css.jpg'
import wp from '../components/shared/imgs/wordpress-icon.jpg'

export const Skills = () => {
  const skills = [
    { name: 'CSS3', image: css },
    { name: 'HTML5', image: html },
    { name: 'JavaScript', image: js },
    { name: 'Reactjs', image: react },
    { name: 'Tailwind CSS', image: tw },
    { name: 'WordPress', image: wp },
  ]

  return (
    <div className='container px-32 pb-32'>
      <h3 className='text-2xl border-solid border-l-8 border-l-emerald-600 px-2'>
        Skills
      </h3>
      <div className='pt-16 grid grid-cols-3'>
        {skills.map((skill, i) => (
          <div className='flex flex-col items-center p-4'>
            <Image
              key={i}
              src={skill.image}
              layout='intrinsic'
              width='150'
              height='150'
            />
            <p className='mt-4'>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
