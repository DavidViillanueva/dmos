import React from 'react'
import { useAnchor } from '../hooks/useAnchor'

import { useTranslation } from 'next-i18next';
import Image from './Image';

interface sectionInterface {
    title: string,
    id: string,
    bg?: string,
    horientation?: string
}

const Section = ({ title, id, bg, horientation = 'right' }:sectionInterface) => {
    const { goto } = useAnchor();

    const { t } = useTranslation('common')

    return (
        <div 
            className="snap-section"
            id={ id }
            style={{
                backgroundColor: bg 
            }}
        >
            <div className="container card__container ">
                <div className={`row ${(horientation==='left')&&'reverse'}`} >
                    <div className="card__item col-5">
                        <h1 className={`card__title ${(horientation==='left')&&'reverse'}`}>{title}</h1>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Exercitationem, voluptate. Repellendus assumenda aut nostrum praesentium, 
                            odit numquam amet rem consectetur animi exercitationem, dicta dolorum voluptatibus 
                            illum non aspernatur sunt! Facere.
                        </p>
                    </div>
                    <div className="card__item col-7">
                        <Image 
                            src="https://conceptodefinicion.de/wp-content/uploads/2014/03/codigo-.jpg"
                            id={ `image${id}` }
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section


