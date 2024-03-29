import { Nav } from '../nav'
import { Footer } from '../footer'
import { Scroll } from '../scroll'

const Layout = ({ children }) => {
  return (
    <>
      <div className='bg-gray-200 max-w-screen-xl mx-auto'>
        <Nav />
        <div className='wrapper'>
          {children}
          <div className='md:hidden'>
            <Footer />
          </div>
          <Scroll />
        </div>
        <div className='hidden max-w-screen-xl mx-auto md:block'>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Layout
