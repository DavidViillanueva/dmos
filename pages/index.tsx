import type { NextPage } from 'next'

import { useTranslation } from 'next-i18next';

import _footer from './_footer'

import ServiceCard from '../components/index/ServiceCard';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Background from '../components/Background';


const Home: NextPage = () => {

  const { t } = useTranslation('common')

  return (
    <>
    <div className="section">

      <Background />
      <div className="content">

        <main className="container main__content">
          <div className="main__header">
            <h1>{ t('hi') }</h1>
            <h4>{ t('welcome_message') }</h4>
          </div>

          <div className="main__body">
            <h1>{ t('our_services') }</h1>
            <p>{ t('services_info') }</p>
            <div className="main__grid">
              <ServiceCard 
                title="servicio1"
                description="descripcion 1"
              />
              <ServiceCard 
                title="servicio2"
                description="descripcion 2"
              />
              <ServiceCard 
                title="servicio3"
                description="descripcion 3"
              />
              <ServiceCard 
                title="servicio4"
                description="descripcion 4"
              />
            </div>
          </div>


        </main>
      </div>
    </div>

    <_footer />
    </>
  )
}

export async function getStaticProps({ locale }:any) {


  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      // Will be passed to the page component as props
    },
  };
}

export default Home
