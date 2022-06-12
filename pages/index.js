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
      <Head>
        <title>Carlan Henry</title>
        <meta name='description' content={desc} />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <div className='bg-gray-200 max-w-screen-xl mx-auto'>
        <Nav />
      </div>
      <div className='wrapper'>
        <Intro />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <div className='bg-gray-200 max-w-screen-xl mx-auto'>
        <Footer />
      </div>
    </>
  )
}
