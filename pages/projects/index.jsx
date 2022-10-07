import Head from 'next/head'
import { ProjectItem } from '../../components/shared/projectitem'

function Projects() {
  const projects = [
    {
      name: 'Casual Streams',
      image: 'bg-tilecasuals',
      link: '/projects/casualstreams',
      tech: ['Next.js', 'React', 'HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
    },
    {
      name: 'GitHub Finder',
      image: 'bg-tilegit',
      link: '/projects/githubfinder',
      tech: ['React', 'HTML', 'Tailwind CSS', 'JavaScript'],
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
    <>
      <Head>
        <title>Carlan Henry&apos;s Projects</title>
      </Head>
      <div className='px-2 flex flex-col container justify-center items-center md:px-4'>
        <h1 className='m-4 text-emerald-600 md:m-8'>Projects</h1>
        <p className='w-4/5 tracking-wide text-center md:w-2/3'>
          These are <em>almost</em> all of my projects. Recently I&apos;ve been
          focusing on React and Next.js based projects. Click a project card to
          visit the project&apos;s page where you can view additional details as
          well as check out the live demo.
        </p>
        <div className='mt-4 flex flex-col items-center md:flex-row md:flex-wrap md:justify-center md:mt-8'>
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
    </>
  )
}

export default Projects
