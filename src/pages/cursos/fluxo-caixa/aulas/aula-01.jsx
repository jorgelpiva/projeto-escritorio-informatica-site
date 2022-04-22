import Link from "next/link"

export default function Inicio(){
    //return "<h1>Título</h1>";
    return (
    <div>
        <h1>Aula 01</h1>
        <Link href="/">
            Home
        </Link><br></br>
        <Link href="/cursos/fluxo-caixa/bemvindo">
            Voltar
        </Link>
    </div>

    )
}