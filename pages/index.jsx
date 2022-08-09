import Head from 'next/head'
import { useContext } from 'react'
import { Intro } from '../components/intro'
import { Skills } from '../components/skills'
import { Projects } from '../components/projects'
import { Contact } from '../components/contact'
import ScrollContext from '../context/scroll/ScrollContext'

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
