
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';



import React from 'react'
import _footer from '../components/Footer'

import { useTranslation } from 'next-i18next';
import BackgroundStatic from '../components/BackgroundStatic';
const Contact = () => {
  
    const { t } = useTranslation('common');


    
    return (
      <>
        <BackgroundStatic 
          style={{
            'position':'absolute',
            'overflow': 'hidden'
          }}
        />
        <div className="contact__content">
          <div className="contact__container" id="f1_container">
            <div id="f1_card" className="shadow">
              <div className="front face">
                <h3>{ t('contact.title') } </h3>
                <span>{ t('contact.help') }</span>
              </div>
              <div className="back face center">
                <span>Email: <a href="mailto:david1997@live.com.ar">david1997@live.com.ar</a></span>
                <span>{ t('contact.phoneLabel') }: 2942-474272</span>
                
              </div>
            </div>
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

export default Contact;