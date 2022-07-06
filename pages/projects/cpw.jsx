const CPW = () => {
  return (
    <>
      <div className='h-[500px] container flex flex-col items-center justify-center bg-cpw text-white'>
        <h1 className='text-7xl after:block after:content-[""] after:border-4 after:border-emerald-600 after:w-1/4 after:m-auto'>
          Champion Pressure Washing
        </h1>
      </div>
      <div className='container p-4 m-auto md:max-w-5xl'>
        <p className='m-6 text-lg md:mx-2 md:my-4 hover:pointer'>
          <span className='font-semibold'>Visit Site:</span>{' '}
          <a
            className='text-emerald-600 hover:text-emerald-400'
            href='https://cpw.vercel.app'
            target='_blank'
          >
            Champion Pressure Washing
          </a>
        </p>
        <p className='m-6 text-lg md:mx-2 md:my-4'>
          <span className='font-semibold'>Technologies:</span> Nextjs, Strapi
        </p>
        <p className='m-6 text-lg md:mx-2 md:my-4'>
          <span className='font-semibold'>Languages:</span> HTML, CSS,
          JavaScript
        </p>
        <p className='m-6 text-lg md:mx-2 md:mt-4 md:mb-2'>
          <span className='font-semibold'>My Role: </span>
          On this project, as the principal developer, my responsibilities
          included:
        </p>
        <ul className='mx-6 text-lg list-outside md:list-inside list-disc'>
          <li className='my-4'>
            Creating mockups and designing pages with AdobeXD.
          </li>
          <li className='my-4'>
            Page building and creation with HTML/CSS/JSX.
          </li>
          <li className='my-4'>
            Creating and sourcing assets for the website. Logo, images, etc.
          </li>
          <li className='my-4'>Integrating Strapi CMS with Nextjs.</li>
          <li className='my-4'>
            Deploying and maintining the website on the Vercel platform.
          </li>
        </ul>
      </div>
    </>
  )
}

export default CPW
