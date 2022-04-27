import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Cursos.module.css'

const Cursos: NextPage = () => {
  return (
    <>
      <Head>
        <title>Cursos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.flexContainer}>
          <h1>Página de Cursos</h1>
          <Link href="/cursos/fluxo-caixa">Fluxo de Caixa</Link>
        </div>
      </main>
    </>
  )
}

export default Cursos
