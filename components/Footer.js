import React from 'react'
import Styles from '@/styles/Footer.module.css'

const Footer = () => {
    return (
        <div className={Styles.footer}>
            <div>
                <small>Copyright © {new Date().getFullYear()} | Powerd by </small>
            </div>
            <a href="https://bizzsole.com" target='_blank' rel="noreferrer"><strong>&nbsp;BizzSole</strong></a>
        </div>
    )
}

export default Footer