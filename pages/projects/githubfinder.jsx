import Head from 'next/head'

const GitHubFinder = () => {
  return (
    <>
      <Head>
        <title>Project: GitHub Finder</title>
      </Head>
      <div className='h-[500px] flex flex-col items-center justify-center bg-git text-white'>
        <h1 className='text-7xl after:block after:content-[""] after:border-4 after:border-emerald-600 after:w-2/4 after:m-auto'>
          GitHub Finder
        </h1>
      </div>
      <div className='container p-4 m-auto md:max-w-5xl'>
        <p className='m-6 text-lg md:mx-2 md:my-4 hover:pointer'>
          <span className='font-semibold'>View Demo:</span>{' '}
          <a
            className='text-emerald-600 hover:text-emerald-400'
            href='https://github-finder-lyart-nine.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            GitHub Finder
          </a>
        </p>
        <p className='m-6 text-lg md:mx-2 md:my-4 hover:pointer'>
          <span className='font-semibold'>View Code on GitHub:</span>{' '}
          <a
            className='text-emerald-600 hover:text-emerald-400'
            href='https://github.com/devcarlan/github-finder'
            target='_blank'
            rel='noreferrer'
          >
            GitHub Finder
          </a>
        </p>
        <p className='m-6 text-lg md:mx-2 md:my-4'>
          <span className='font-semibold'>Technologies:</span> Reactjs, Tailwind
          CSS
        </p>
        <p className='m-6 text-lg md:mx-2 md:my-4'>
          <span className='font-semibold'>Languages:</span> HTML, CSS,
          JavaScript
        </p>
        <p className='m-6 text-lg md:mx-2 md:my-4'>
          <span className='font-semibold'>Description:</span> Easily search for
          GitHub user profiles. Visit individual profiles for more details about
          a specific user. This project interfaces with the GitHub API to fetch
          user data.
        </p>
      </div>
    </>
  )
}

export default GitHubFinder
