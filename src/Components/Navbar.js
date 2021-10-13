import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'

export default function Navbar() {
    const data = useStaticQuery(graphql`
        query SiteInfo {
            site {
            siteMetadata {
                description
                title
            }
            }
        }
    `);

    const { title } = data.site.siteMetadata

    return (
        <nav>
            <h1>{title}</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/Projects">PortFolio Projects</Link>
                <Link to="/404">404</Link>
            </div>
        </nav>
    )
}
