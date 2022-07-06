const AMS = () => {
  return (
    <>
      <div className='h-[500px] flex flex-col items-center justify-center bg-ams text-white'>
        <h1 className='text-7xl after:block after:content-[""] after:border-4 after:border-emerald-600 after:w-2/4 after:m-auto'>
          AMS Vans
        </h1>
      </div>
      <div className='container p-4 m-auto md:max-w-5xl'>
        <p className='m-6 text-lg md:mx-2 md:my-4 hover:pointer'>
          <span className='font-semibold'>Visit Site:</span>{' '}
          <a
            className='text-emerald-600 hover:text-emerald-400'
            href='https://www.amsvans.com'
            target='_blank'
            rel='noreferrer'
          >
            AMS Vans
          </a>
        </p>
        <p className='m-6 text-lg md:mx-2 md:my-4'>
          <span className='font-semibold'>Technologies:</span> WordPress
        </p>
        <p className='m-6 text-lg md:mx-2 md:my-4'>
          <span className='font-semibold'>Languages:</span> HTML, CSS, PHP,
          JavaScript
        </p>
        <p className='m-6 text-lg md:mx-2 md:my-4'>
          <span className='font-semibold'>Description:</span> Website for the
          wheelchair van company AMS Vans. Built with WordPress and deployed on
          AWS.
        </p>
        <p className='m-6 text-lg md:mx-2 md:mt-4 md:mb-2'>
          <span className='font-semibold'>My Role: </span>
          On this project, as the junior developer, my responsibilities
          included:
        </p>
        <ul className='mx-6 text-lg list-outside md:list-inside list-disc'>
          <li className='my-4'>
            Creating page templates for the administrative backend for editing
            and adding new content.
          </li>
          <li className='my-4'>
            Porting page content from legacy system to the WordPress
            environment. Verbiage, images, and links etc.
          </li>
          <li className='my-4'>
            Coordinating with the marketing team to deploy content changes from
            the staging site to the production build.
          </li>
          <li className='my-4'>
            Creating a vehicle finance calculator using JQuery.
          </li>
        </ul>
      </div>
    </>
  )
}

export default AMS
