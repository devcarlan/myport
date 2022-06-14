import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const desc = "Carlan Henry's Portfolio Website"
  return (
    <Html>
      <Head>
        <meta name='description' content={desc} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
