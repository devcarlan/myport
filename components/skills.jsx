import Image from 'next/image'
import css from '../components/shared/imgs/css3.jpg'
import html from '../components/shared/imgs/html5.jpg'
import js from '../components/shared/imgs/javascript.jpg'
import react from '../components/shared/imgs/react.jpg'
import tw from '../components/shared/imgs/tailwind-css.jpg'
import wp from '../components/shared/imgs/wordpress-icon.jpg'

export const Skills = ({ ref }) => {
  const skills = [
    { name: 'CSS3', image: css },
    { name: 'HTML5', image: html },
    { name: 'JavaScript', image: js },
    { name: 'Reactjs', image: react },
    { name: 'Tailwind CSS', image: tw },
    { name: 'WordPress', image: wp },
  ]

  return (
    <div
      className='mt-12 px-4 container mx-auto md:max-w-5xl md:mt-24'
      id='skills'
      ref={ref}
    >
      <h3 className='text-2xl border-solid border-l-8 border-l-emerald-600 px-2'>
        Skills
      </h3>
      <div className='pt-8 md:pt-16 flex flex-wrap justify-center items-center'>
        {skills.map((skill, i) => (
          <div
            key={i}
            className='flex flex-col items-center shadow-md p-4 mx-4 my-4'
          >
            <Image
              src={skill.image}
              layout='intrinsic'
              width='150'
              height='150'
              alt={skill.name}
            />
            <p className='mt-4'>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
