import React from 'react'
import { useAnchor } from '../hooks/useAnchor';
import Link from 'next/link'

const _navbar = () => {
    const { goto } = useAnchor();
    return (

        <ul className="nav justify-content-center header">
            <li className="nav-item">
                <Link href="/">
                    <a className="nav-link" >Home</a>
                </Link>
            </li>
            <li className="nav-item">
            <Link href="/services">
                <a className="nav-link">Services</a>
            </Link>
            
            </li>
            <li className="nav-item">
                <Link href="/contact">
                    <a className="nav-link" >Contact</a>
                </Link>
            </li>
        </ul>
    )
}

export default _navbar
