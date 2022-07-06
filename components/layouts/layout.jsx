import { Nav } from '../nav'
import { Footer } from '../footer'

const Layout = ({ children }) => {
  return (
    <>
      <div className='bg-gray-200 max-w-screen-xl mx-auto'>
        <Nav />
      </div>
      <div className='wrapper'>{children}</div>
      <div className='hidden max-w-screen-xl mx-auto md:block'>
        <Footer />
      </div>
    </>
  )
}

export default Layout
