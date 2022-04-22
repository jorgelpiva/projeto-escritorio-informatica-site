import Link from "next/link"

export default function Inicio(){
    //return "<h1>Título</h1>";
    return (
    <div>
        <h1>Página Inicial</h1>
        <Link href="/cursos/inicio">
            Cursos
        </Link><br></br>
        <Link href="/">
            Sobre Nós
        </Link>
    </div>
    )
}