import React from 'react'
import { useAnchor } from '../hooks/useAnchor';
import _footer from './_footer';
import Section from './_section'

const services = () => {
    const { goto } = useAnchor();
    
    return (<div>

        
        <ul className="nav justify-content-center  sub-header">
          <li className="nav-item">
              <a href="#first"  onClick={ goto } className="nav-link" > First </a>
            </li>
            <li className="nav-item">
              <a href="#second" onClick={ goto } className="nav-link" > Second </a>
            </li>
            <li className="nav-item">
              <a href="#third" onClick={ goto } className="nav-link" > Third </a>
            </li>
        </ul>
    
        <div className="snap-container">
          <Section
            title="first"
            id="first"
            // bg="red"
          />
          <Section 
            title="second"
            id="second"
            // bg="blue"
          />
          <Section 
            title="third"
            id="third"
            // bg="cyan"
          />
          <_footer /> 
        </div>

        </div>
      )
}

export default services
