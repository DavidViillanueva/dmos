import React from 'react'
import ThemeChanger from './ThemeChanger'
import Link from 'next/link'

const _footer = () => {
    return (
        <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex align-items-center">
            {/* <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                <svg className="bi" width="30" height="24"><use href="#bootstrap"></use></svg>
            </a> */}
            <span className="text-muted">© 2021 DmoS</span>
            </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
                <ThemeChanger />
            </li>
            <li className="ms-3 nav-item">
                <Link  href="#" locale="en">
                    <a className="nav-link">En</a>
                </Link>
            </li>
            <li className="ms-3 nav-item">
                <Link  href="#" locale="es">
                    <a className="nav-link">Es</a>
                </Link>
            </li>
            </ul>
        </footer>
</div>
    )
}

export default _footer
