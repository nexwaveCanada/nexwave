import '@/styles/globals.css'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from 'next/head';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      offset: 50,
    });
  }, []);
  return (<main>
    <Head>
      <title>Nexwave</title>
      <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
      <link
        rel="icon"
        href="/favicon/favicon-16x16.png"
        type="image/png"
        sizes="16*16"
      />
      <link
        rel="apple-touch-icon"
        href="/favicon/apple-touch-icon.png"
        type="image/png"
        sizes="16*16"
      />
    </Head>
    <ToastContainer />
    <Component {...pageProps} />
  </main>)
}
