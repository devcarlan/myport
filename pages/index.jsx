import Head from 'next/head'
import { Intro } from '../components/intro'
import { Skills } from '../components/skills'
import { Projects } from '../components/projects'
import { About } from '../components/about'
import { Contact } from '../components/contact'

export default function Home() {
  return (
    <>
      <Head>
        <title>Carlan Henry</title>
        <meta name='description' content="Carlan Henry's Portfolio Website" />
      </Head>
      <Intro />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}
