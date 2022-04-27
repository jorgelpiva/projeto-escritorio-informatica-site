import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.flexContainer}>
          <h1>Página Inicial</h1>
          <Link href="/cursos">Cursos</Link>
          <Link href="/">Sobre Nós</Link>
        </div>
      </main>
    </>
  )
}

export default Home
