'use client'

import Link from "next/link";
import "./Style.css";
import { useState } from "react";

export default function Login() {

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    function handleSubmit() {
        console.log(email)
        console.log(password)
    }
    return (
        <div className="container">
            <div className="form">
                <h2>Login</h2>
                <input
                    type="text"
                    placeholder="Email"
                    className="input"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="input"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <button className="button" onClick={handleSubmit}
                disabled={!email || !password}
                >
                    Entrar</button>


                <Link href="/">
                <button className="btn-home">HOME</button>
                </Link>
            </div>
        </div>
    )
}