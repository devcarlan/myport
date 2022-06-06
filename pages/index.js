import Head from 'next/head'
import Nav from '../components/nav'

export default function Home() {
  const desc = "Carlan Henry's Portfolio Website"
  return (
    <div className='wrapper'>
      <Head>
        <title>Carlan Henry</title>
        <meta name='description' content={desc} />
      </Head>
      <Nav />
    </div>
  )
}
