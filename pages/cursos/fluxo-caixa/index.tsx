import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../../../styles/Fluxo.module.css'

const FluxoCaixa: NextPage = () => {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>Fluxo de Caixa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.flexContainer}>
          <h1>Bem vindo ao nosso Curso de Fluxo de Caixa</h1>
          <Link href="/cursos/fluxo-caixa/aulas/aula-01">Aula 01</Link>
          <Link href="/">Home</Link>
          <span onClick={() => router.back()}>Voltar</span>
        </div>
      </main>
    </>
  )
}
export default FluxoCaixa
