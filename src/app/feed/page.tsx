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
import TextAreaCustom from "@/components/TextAreaCustom";
import ButtonCustom from "@/components/ButtonCustom";

type Post = {
    id: string;
    author: Author;
    publishedAt: Date;
    content: string;
    comments: Comment[];
}
type Author = {
    name: string;
    role: string;
    avatarUrl: string;
}
type Comment = {
    id: string;
    author: Author;
    comment: string;
    publisheAt: Date;
}

export default function Feed() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [content, setContent] = useState<string>('');

    useEffect(() => {
        loadPost();
    }, [])

    async function loadPost() {
        const response = await axios.get("http://localhost:3001/posts");
        const postSort = response.data.sort((a: any, b: any) => (
            new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        ))
        setPosts(postSort)
    }

    async function handleCreatePost(event: FormEvent) {
        event.preventDefault()

        const post = {
            id: String(posts.length + 1),
            content: content,
            publishedAt: new Date().toISOString(),
            author: {
                name: "Breno Silva",
                role: "Front-end",
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
                    <form onSubmit={handleCreatePost} className="post">
                        <TextAreaCustom
                            message={content}
                            setMessage={setContent}
                            title="Deixe um comentario"
                        />
                        <ButtonCustom />
                    </form>
                    {posts.map(item => (
                        <Post post={item} key={item.id} setPost={setPosts}/>
                    ))}
                </main>
            </div>
        </div>
    )
}


