import React from 'react';

interface serviceCard {
  title: string,
  description: string
}

const ServiceCard = ({ title, description }:serviceCard) => {
    return (
        <div className="main_gridelement">
          <div className="main_gridelementImage"></div>
          <div className="main__gridelementOverlay">
            <div className="hidden-text">
              { description }
            </div>
            <div className="visible-text">
              { title }
            </div>
          </div>
        </div>
    )
}

export default ServiceCard
