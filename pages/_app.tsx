import Head from "next/head";
import app from "next/app";
import { appWithTranslation } from 'next-i18next';

import '../styles/Home.styles.scss'

// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css';
import _navbar from "../components/Navbar";
import _footer from "../components/Footer";
import Background from "../components/Background";


function MyApp({ Component, pageProps }:any) {

  

  return (
    <>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>

        <_navbar />
          <Component {...pageProps} />
    </>
  )

  
}

MyApp.getInitialProps = async (appContext:any) => ({ ...await app.getInitialProps(appContext) })

export default appWithTranslation(MyApp)
