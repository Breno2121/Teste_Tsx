import Link from "next/link"

export default function login() {
    return (
        <div>
            <h1>Login</h1>
            <Link href="/">
                <button>Pagina inicial</button>
            </Link>
        </div>
    )
}