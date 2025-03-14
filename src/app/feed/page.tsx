'use client'

import Header from "@/components/Header";
import './Style.css'
import Image from "next/image";
import logo from '@/Image/papel_parede_feed.jpg'
import Avatar from "@/components/Avatar";

export default function Feed() {
    return (
        <div>
            <Header />
            <div className="container">
                <aside className="sidebar">
                    <Image src={logo} alt={"logo"} className={"cover"} />

                    <div className="profile">
                    <Avatar src="https://github.com/breno2121.png" hasBorder/>
                    <strong>Breno Silva</strong>
                    <strong>Desenvolvedor Mobile</strong>
                    </div>
                </aside>
                <main className="main">

                </main>
            </div>
        </div>



    )
}


