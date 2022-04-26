import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from '../../../../styles/Aula01.module.css'

const Aula01: NextPage = () => {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>Aula 01</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.flexContainer}>
          <h1>Aula 01</h1>
          <Link href="/">Home</Link>
          <span onClick={() => router.back()}>Voltar</span>
        </div>
      </main>
    </>
  )
}

export default Aula01
