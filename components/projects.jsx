import Image from 'next/image'
import ams from '../components/shared/imgs/amsvans.jpg'
import d2c from '../components/shared/imgs/d2c.jpg'
import cpw from '../components/shared/imgs/cpw.jpg'

export const Projects = () => {
  const projects = [
    { name: 'AMSVans', image: ams },
    { name: 'Dare 2 Care Outreach', image: d2c },
    { name: 'Champion Pressure Washing', image: cpw },
  ]
  return (
    <div
      className='mt-12 px-4 container mx-auto md:max-w-5xl md:mt-24'
      id='projects'
    >
      <h3 className='text-2xl border-solid border-l-8 border-l-emerald-600 px-2'>
        Projects
      </h3>
      <div className='flex flex-col pt-8 justify-between md:flex-row md:pt-16'>
        {projects.map((project, i) => (
          <div key={i} className='m-4 flex flex-col items-center shadow-lg'>
            <Image
              src={project.image}
              layout='intrinsic'
              width='500'
              height='500'
              alt={project.name}
            />
            <div className='w-full py-4 bg-gray-200 flex flex-col justify-center items-center text-center'>
              <p className='text-lg font-bold'>{project.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
