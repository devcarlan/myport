import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const desc = "Carlan Henry's Portfolio Website"
  return (
    <Html>
      <Head>
        <title>Carlan Henry</title>
        <meta name='description' content={desc} />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
