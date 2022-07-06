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
      <Head>
        <title>Carlan Henry</title>
        <meta name='description' content="Carlan Henry's Portfolio Website" />
      </Head>
      <div className='wrapper'>
        <Intro />
        <Skills />
        <Projects />
        <Contact />
        <div className='md:hidden'>
          <Footer />
        </div>
      </div>
    </>
  )
}
