import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Logo.module.css'

const Logo = ({children,src, alt, to, className, style}) => {
    const {logo} = styles
    const stylesLogo = [logo, className]
    return <Link to={to} className={stylesLogo} style={style}>
        <img src={src} alt={alt} />
        {children}
    </Link>
}

export default Logo