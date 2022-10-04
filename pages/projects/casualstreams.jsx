const CasualStreams = () => {
  return (
    <>
      <div className='h-[500px] flex flex-col items-center justify-center bg-casuals text-white'>
        <h1 className='text-7xl after:block after:content-[""] after:border-4 after:border-emerald-600 after:w-2/4 after:m-auto'>
          Casual Streams
        </h1>
      </div>
      <div className='container p-4 m-auto md:max-w-5xl'>
        <p className='m-6 text-lg md:mx-2 md:my-4 hover:pointer'>
          <span className='font-semibold'>View Demo:</span>{' '}
          <a
            className='text-emerald-600 hover:text-emerald-400'
            href='https://casualstreams.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            Casual Streams
          </a>
        </p>
        <p className='m-6 text-lg md:mx-2 md:my-4'>
          <span className='font-semibold'>Technologies:</span> Next.js, React,
          Tailwind CSS
        </p>
        <p className='m-6 text-lg md:mx-2 md:my-4'>
          <span className='font-semibold'>Languages:</span> HTML, CSS,
          JavaScript
        </p>
        <p className='m-6 text-lg md:mx-2 md:my-4'>
          <span className='font-semibold'>Description:</span> Personal project
          leveraging the Twitch API and returning the first 100 streams with an
          average viewer count of 50. Built with Next.js and styled with
          Tailwind CSS.
        </p>
      </div>
    </>
  )
}

export default CasualStreams
