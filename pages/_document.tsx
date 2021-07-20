import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { IconContext } from 'react-icons'

export default class MyDocument extends Document {
  render() {
    return (
      <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
        <Html lang='en'>
          <Head>
            <link rel='shortcut icon' href='/jalen-32x32.png' />

            <link rel='icon' sizes='180x180' href='/jalen-180x180.png' />
            <link
              rel='icon'
              type='image/png'
              sizes='96x96'
              href='/jalen-96x96.png'
            />
            <link
              rel='icon'
              type='image/png'
              sizes='32x32'
              href='/jalen-32x32.png'
            />
            <link
              rel='icon'
              type='image/png'
              sizes='16x16'
              href='/jalen-16x16.png'
            />

            <link rel='manifest' href='/manifest.json' />

            <script
              async
              src='https://www.googletagmanager.com/gtag/js?id=G-SNY4GPFNX2'
            ></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
               window.dataLayer = window.dataLayer || [];
               function gtag(){dataLayer.push(arguments);}
               gtag('js', new Date());
               gtag('config', 'G-SNY4GPFNX2', {
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
