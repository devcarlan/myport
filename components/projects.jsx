export const Projects = () => {
  const projects = [
    { name: 'AMSVans' },
    { name: 'Champion Pressure Washing' },
    { name: 'Casual Streams' },
    { name: 'Dare 2 Care' },
  ]
  return (
    <div className='container mx-auto md:max-w-5xl md:mt-24'>
      <h3 className='text-2xl border-solid border-l-8 border-l-emerald-600 px-2'>
        Projects
      </h3>
      <div>
        {projects.map((project, i) => (
          <p key={i}>{project.name}</p>
        ))}
      </div>
    </div>
  )
}
