import Link from "next/link"

export default function Inicio(){
    //return "<h1>Título</h1>";
    return (
    <div>
        <h1>Página de Cursos</h1>
        <Link href="/cursos/fluxo-caixa/bemvindo">
            Fluxo de Caixa
        </Link>
    </div>
    )
}