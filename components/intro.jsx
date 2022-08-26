export const Intro = () => {
  return (
    <div className='pt-12 container m-auto flex flex-col justify-around items-center text-center md:pt-24 md:max-w-5xl '>
      <h1 className='text-4xl tracking-wide md:m-4 md:text-5xl md:tracking-normal'>
        Hi, I&apos;m <span className='text-emerald-600'>Carlan.</span>
      </h1>
      <h2 className='text-5xl tracking-wide mx-4 mt-2 mb-4 md:text-6xl md:m-2 md:tracking-normal'>
        <span className='sm:hidden'>
          A<br />
        </span>
        <span className='hidden sm:inline'>I&apos;m a </span>
        <span className='text-emerald-600'>Web Developer</span>
      </h2>
      <p className='px-5 text-lg mx-auto tracking-wide leading-8 md:m-4 md:max-w-4xl md:px-0 md:leading-7 '>
        &#8212; with experience building fast, functional websites as solutions
        for increasing engagement, and establishing a strong web presence.
        Technologies like Reactjs, AdobeXD, and Visual Studio Code are my go-tos
        for building, designing, and coding apps for the web. Recently my focus
        has been on Next.js and Tailwind CSS for reliably building fast,
        responsive, mobile friendly, and easily scalable web apps.
      </p>
    </div>
  )
}
