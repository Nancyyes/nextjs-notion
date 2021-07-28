import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { IconContext } from 'react-icons'

export default class MyDocument extends Document {
  render() {
    return (
      <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
        <Html lang='en'>
          <Head>
            <link rel='shortcut icon' href='/Nancy-32x32.png' />

            <link rel='icon' sizes='180x180' href='/Nancy-180x180.png' />
            <link
              rel='icon'
              type='image/png'
              sizes='96x96'
              href='/Nancy-96x96.png'
            />
            <link
              rel='icon'
              type='image/png'
              sizes='32x32'
              href='/Nancy-32x32.png'
            />
            <link
              rel='icon'
              type='image/png'
              sizes='16x16'
              href='/Nancy-16x16.png'
            />

            <link rel='manifest' href='/manifest.json' />

            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `
              }}
            />
          </Head>

          <body>
            <script src='noflash.js' />

            <Main />

            <NextScript />
          </body>
        </Html>
      </IconContext.Provider>
    )
  }
}
