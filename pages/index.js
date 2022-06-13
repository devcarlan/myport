import Head from 'next/head'
import { Nav } from '../components/nav'
import { Intro } from '../components/intro'
import { Skills } from '../components/skills'
import { Projects } from '../components/projects'
import { About } from '../components/about'
import { Contact } from '../components/contact'
import { Footer } from '../components/footer'

export default function Home() {
  return (
    <>
      <div className='bg-gray-200 max-w-screen-xl mx-auto'>
        <Nav />
      </div>
      <div className='wrapper'>
        <Intro />
        <Skills />
        <Projects />
        <Contact />
        <div className='md:hidden'>
          <Footer />
        </div>
      </div>
      <div className='hidden max-w-screen-xl mx-auto md:block'>
        <Footer />
      </div>
    </>
  )
}
