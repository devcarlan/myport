export const Footer = () => {
  return (
    <div className='mt-8 pb-8 container flex justify-center items-center mx-auto md:max-w-5xl md:mt-8 md:mb-8 md:pb-0'>
      <p className='text-sm text-gray-400'>
        &copy; {new Date().getFullYear()} Carlan Henry. All rights reserved.
      </p>
    </div>
  )
}
