import React from 'react'
import Styles from '../styles/Navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div>
            <nav>
                <ul className={Styles.navbar}>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/blogs">Blogs</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar