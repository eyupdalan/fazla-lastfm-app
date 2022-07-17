import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fazla Gıda Frontend Case Study</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        Artist list page
      </main>

      <footer className={styles.footer}>
          Fazla Gıda Frontend Case Study
      </footer>
    </div>
  )
}
