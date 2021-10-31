import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const _navbar = () => {

    const { t } = useTranslation('common')

    return (
    
    <div>
        <ul className="nav justify-content-center header">
            <h2 className="icon">Dmos</h2>
            <li className="nav-item">
                <Link href="/">
                    <a className="nav-link" >{t('header.home')}</a>
                </Link>
            </li>
            <li className="nav-item">
            <Link href="/services">
                <a className="nav-link">{t('header.services')}</a>
            </Link>
            
            </li>
            <li className="nav-item">
                <Link href="/contact">
                    <a className="nav-link" >{t('header.contact')}</a>
                </Link>
            </li>
        </ul>
    </div>
    )
}

export default _navbar
