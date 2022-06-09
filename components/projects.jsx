import Image from 'next/image'
import ams from '../components/shared/imgs/amsvans.jpg'
import d2c from '../components/shared/imgs/d2c.jpg'

export const Projects = () => {
  const projects = [
    { name: 'AMSVans', image: ams },
    { name: 'Dare 2 Care', image: d2c },
  ]
  return (
    <div className='container mx-auto md:max-w-5xl md:mt-24'>
      <h3 className='text-2xl border-solid border-l-8 border-l-emerald-600 px-2'>
        Projects
      </h3>
      <div>
        {projects.map((project, i) => (
          <div key={i}>
            <Image
              src={project.image}
              layout='intrinsic'
              width='500'
              height='500'
            />
            <p className='mt-4'>{project.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
