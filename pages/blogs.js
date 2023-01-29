import React from 'react'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import blogs from '../data/blogs.json'

const Blogs = () => {
    const myStyles = {
        textAlign: 'center',
        paddingBottom: '0.5em'
    }

    return (
        <main className={styles.main}>
            <div>
                <h1 style={myStyles}>Blogs</h1>
                <hr />
                <div className={styles.grid}>
                    {blogs.map((blog, index) => {
                        return (
                            <Link
                                href={`blogpost/${blog.title}`}
                                className={styles.card}
                            >
                                <h2>
                                    {blog.title}
                                </h2>
                                <p>
                                    {blog.detail.slice(0, 150)} ...
                                </p>
                                <br />
                                <p>
                                    <small>Written by: {blog.author}</small>
                                </p>
                                <p>
                                    <small>Posted on: {blog.date}</small>
                                </p>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </main>
    )
}

export default Blogs