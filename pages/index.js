import Head from 'next/head'
import { Nav } from '../components/nav'
import { Intro } from '../components/intro'
import { Skills } from '../components/skills'
import { Projects } from '../components/projects'
import { About } from '../components/about'
import { Contact } from '../components/contact'
import { Footer } from '../components/footer'

export default function Home() {
  const desc = "Carlan Henry's Portfolio Website"
  return (
    <>
      <div className='wrapper'>
        <Head>
          <title>Carlan Henry</title>
          <meta name='description' content={desc} />
        </Head>
        <Nav />
        <Intro />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </div>
      <div className='bg-gray-200'>
        <Footer />
      </div>
    </>
  )
}
