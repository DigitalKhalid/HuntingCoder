import React from 'react'
import { useRouter } from 'next/router'
import styles from '@/styles/Home.module.css'
// import blogs from '../data/blogs.json'

const Slug = () => {
    const router = useRouter()
    const { slug } = router.query

    return (
        <main className={styles.main}>
            <div>
                <h1>Title of Page {slug}</h1>
                <hr />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem velit itaque dolorem ad, ratione culpa magni quasi, iusto repellat dolore, ex laboriosam? Incidunt iste temporibus quaerat libero quis nesciunt facere quibusdam omnis animi necessitatibus totam assumenda eos, reiciendis itaque officiis odit recusandae dolorem sunt illum quia dignissimos sequi voluptates veritatis?
                </p>
                <p>
                    {/* Written by: {blog.author} */}
                </p>
                <p>
                    {/* Posted on: {blog.date} */}
                </p>
            </div>
        </main>
    )
}

export default Slug;