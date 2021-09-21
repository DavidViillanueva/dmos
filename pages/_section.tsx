import React from 'react'
import { useAnchor } from '../hooks/useAnchor'

interface sectionInterface {
    title: string,
    id?: string,
    bg?: string,
    horientation?: string
}

const Section = ({ title, id, bg,horientation }:sectionInterface) => {
    const { goto } = useAnchor();
    return (
        <div 
            className="snap-section"
            id={ id }
            style={{
                backgroundColor: bg 
            }}
        >
            <div className="container card__container">
                <div className="row">
                    <div className="card__item col-5">
                        <h1>{title}</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Exercitationem, voluptate. Repellendus assumenda aut nostrum praesentium, 
                            odit numquam amet rem consectetur animi exercitationem, dicta dolorum voluptatibus 
                            illum non aspernatur sunt! Facere.
                        </p>
                    </div>
                    <div className="card__item col-7">
                        <img src="https://conceptodefinicion.de/wp-content/uploads/2014/03/codigo-.jpg"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section


