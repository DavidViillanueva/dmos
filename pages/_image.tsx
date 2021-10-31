import { useEffect } from 'react';
import React from 'react';

interface ImageInterface {
    src: string,
    id: string
}



const Image = ({src, id }:ImageInterface) => {
    
    let imgElement:any = undefined;
    
    useEffect(() => {
        if (process.browser) {
            imgElement = document.getElementById(id);
            console.log( imgElement );
        }
        
    }, [imgElement, id])

    const handleMove = (e:any) => {
        const height = e.nativeEvent.srcElement.clientHeight
        const width = e.nativeEvent.srcElement.clientWidth
        const xVal = e.nativeEvent.layerX;
        const yVal = e.nativeEvent.layerY;

        const yRotation = 10 * ((xVal - width / 2) / width)
        const xRotation = -10 * ((yVal - height / 2) / height)

        const string = 'perspective(500px) scale(1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)';
        if (process.browser && imgElement)
            imgElement.style.transform = string
        
    }

    // const handleDown = () => {
    //     if (process.browser && imgElement)
    //     imgElement.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)'
    // }

    // const handleUp = () => {
    //     if (process.browser && imgElement)
    //     imgElement.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)'
    // }

    const handleLeave = () => {
        if (process.browser && imgElement)
        imgElement.style.transform = 'none';
    }

    return (
        <img 
            id={ id } 
            className="image"
            src={src}
            onMouseMove={ handleMove }
            // onMouseDown={ handleDown }
            // onMouseUp= { handleUp }
            onMouseLeave={ handleLeave }
        >
        </img>
    )
}

export default Image
