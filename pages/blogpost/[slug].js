import React from 'react'
// import { useRouter } from 'next/router'
import styles from '@/styles/Home.module.css'
import { Blaka_Hollow } from '@next/font/google'
// import blogs from '../data/blogs.json'

const Slug = (props) => {
    const {blog} = props.blog

    return (
        <main className={styles.main}>
            <div>
                <h1>{blog.title}</h1>
                <hr />
                <p>
                    {blog.detail}
                </p>
                <br />
                <p>
                    Written by: {blog.author}
                </p>
                <p>
                    Posted on: {blog.date}
                </p>
            </div>
        </main>
    )
}

export async function getServerSideProps(context) {
    const { slug } = context.query

    const url = `http://localhost:3000/api/blog?title=${slug}`
    const response = await fetch(url)
    const blog = await response.json()

    return {
        props: { blog }, // will be passed to the page component as props
    }
}

export default Slug;