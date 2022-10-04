import { ProjectItem } from './shared/projectitem'
import ams from '../components/shared/imgs/amsvans.jpg'
import d2c from '../components/shared/imgs/d2c.jpg'
import cpw from '../components/shared/imgs/cpw.jpg'

export const Projects = () => {
  const projects = [
    {
      name: 'Casual Streams',
      image: 'bg-tilecasuals',
      link: '/projects/casualstreams',
      tech: ['Next.js', 'React', 'HTML', 'CSS', 'JavaScript'],
    },
    {
      name: 'Champion Pressure Washing',
      image: 'bg-tilecpw',
      link: '/projects/cpw',
      tech: ['Next.js', 'React', 'HTML', 'CSS', 'JavaScript'],
    },

    {
      name: 'Dare 2 Care Outreach',
      image: 'bg-tiled2c',
      link: '/projects/d2c',
      tech: ['WordPress', 'PHP'],
    },
    {
      name: 'AMSVans',
      image: 'bg-tileams',
      link: '/projects/ams',
      tech: ['WordPress', 'PHP'],
    },
  ]
  return (
    <div
      className='mt-12 px-4 container mx-auto md:max-w-5xl md:mt-24'
      id='projects'
    >
      <h3 className='text-2xl border-solid border-l-8 border-l-emerald-600 px-2'>
        Projects
      </h3>
      <div className='flex flex-col pt-8 items-center md:flex-row md:flex-wrap md:justify-center md:pt-16'>
        {projects.map((project, i) => (
          <ProjectItem
            key={i}
            link={project.link}
            name={project.name}
            image={project.image}
            skills={project.tech}
          />
        ))}
      </div>
    </div>
  )
}
