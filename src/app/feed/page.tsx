'use client'

import Header from "@/components/Header";
import './Style.css'
import Image from "next/image";
import logo from '@/Image/papel_parede_feed.jpg'
import Avatar from "@/components/Avatar";
import { PiPencilLine } from "react-icons/pi";
import Post from "@/components/Post/Index";
import { FormEvent, useEffect, useState } from "react";
import axios from "axios";

type Post = {
    id: number;
    author: string;
    publishedAt: Date;
    content: string;
}

export default function Feed() {
    const [posts, setPosts] = useState<any[]>([]);
    const [content, setContent] = useState<string>('');

    useEffect(() => {
        loadPost();
    }, [])

    async function loadPost() {
        const response = await axios.get("http://localhost:3001/posts");

        const postSort = response.data.sort{(a: any, b: any) => new Date(a.publisheAt as any) - new Date(b.publisheAt as any)}

        setPosts(response.data)
    }

    async function handleCreatePost(event: FormEvent) {
        event.preventDefault()

        const post = {
            id: posts.length + 1,
            content: content,
            publishedAt: new Date().toISOString(),
            author: {name: "Breno Silva",
            role: "desenvolvedor Java",
            avatarUrl: "https://github.com/breno2121.png"
        }
        }

        await axios.post("http://localhost:3001/posts", post)
        await loadPost();
        setContent('');
    }

    return (
        <div>
            <Header />
            <div className="container">
                <aside className="sidebar">
                    <Image src={logo} alt={"logo"} className={"cover"} />

                    <div className="profile">
                        <Avatar src="https://github.com/breno2121.png" hasBorder />
                        <strong>Breno Silva</strong>
                        <strong>Front-end</strong>
                        <footer>
                            <button className="button-edit"><PiPencilLine /> Editar perfil</button>
                        </footer>
                    </div>
                </aside>
                <main className="main">
                    <form onSubmit={handleCreatePost}>
                        <textarea placeholder="O que voce esta pensando?"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                        <button type="submit"> Publicar</button>
                    </form>
                    {posts.map(item => (
                        <Post post={item} key={item.id} />
                    ))}
                </main>
            </div>
        </div>
    )
}


