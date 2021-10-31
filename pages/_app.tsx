import Head from "next/head";
import app from "next/app";
import { appWithTranslation } from 'next-i18next';

import '../styles/Home.styles.scss'

// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css';
import _navbar from "./_navbar";
import _footer from "./_footer";
import Background from "../components/Background";


function MyApp({ Component, pageProps }:any) {

  

  return (
    <>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="boxicons.min.css" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossOrigin="anonymous"></script>
    </Head>

        <_navbar />
          <Component {...pageProps} />
    </>
  )

  
}

MyApp.getInitialProps = async (appContext:any) => ({ ...await app.getInitialProps(appContext) })

export default appWithTranslation(MyApp)
