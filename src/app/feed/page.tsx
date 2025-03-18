'use client'

import Header from "@/components/Header";
import './Style.css'
import Image from "next/image";
import logo from '@/Image/papel_parede_feed.jpg'
import Avatar from "@/components/Avatar";
import { PiPencilLine } from "react-icons/pi";
import Post from "@/components/Post/Index";

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
                    <strong>Front-end</strong>
                    <footer>
                    <button className="button-edit"><PiPencilLine /> Editar perfil</button>
                    </footer>
                    </div>
                </aside>
                <main className="main">
                        <Post post={{} as any}/>
                        <Post post={{} as any}/>
                        <Post post={{} as any}/>
                        <Post post={{} as any}/>
                        <Post post={{} as any}/>
                        <Post post={{} as any}/>
                </main>
            </div>
        </div>
    )
}


