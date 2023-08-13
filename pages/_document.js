import { Html, Head, Main, NextScript } from 'next/document'
import emailjs from '@emailjs/browser'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <script type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js" async />
        <script type="text/javascript" async>
          (function(){
            emailjs.init("IxZZgHa1tCoeypQM0")
          })();
        </script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
