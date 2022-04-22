import Link from "next/link"

export default function Inicio(){
    //return "<h1>Título</h1>";
    return (
    <div>
        <h1>Bem vindo ao nosso Curso de Fluxo de Caixa</h1>
        <Link href="/cursos/fluxo-caixa/aulas/aula-01">
            Aula 01
        </Link><br></br>
       <Link href="/">
            Home
        </Link><br></br>
        <Link href="/cursos/inicio">
            Voltar
        </Link>
        
    </div>

    )
}