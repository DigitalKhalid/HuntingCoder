import Image from 'next/image'
import Script from 'next/script'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import blogs from '../data/blogs.json'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>


      <Script strategy='lazyload'>
      </Script>

      <main className={styles.main}>
        <h1>Hunting Coder</h1>
        <Image src='/coder.avif' width={500} height={300}></Image>
        <p>Blogs for Hunting Coders by Hunting Coder</p>


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
                <p sty>
                  {blog.detail.slice(0, 75)} .....
                </p>
              </Link>
            )
          })}
        </div>
      </main>
    </>
  )
}
