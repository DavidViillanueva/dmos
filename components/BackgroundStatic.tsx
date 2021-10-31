import React from 'react'
interface BackgroundStatic {
    style?: object
}
const BackgroundStatic = ({style = {} }: BackgroundStatic) => {
    return (
        <div 
            className="image-container"
            style={ style }
        >
            <div className="background">
                <div className="circle1 circle"></div>
                <div className="circle2 circle"></div>
                <div className="circle3 circle"></div>

            </div>
        </div>
    )
}

export default BackgroundStatic
