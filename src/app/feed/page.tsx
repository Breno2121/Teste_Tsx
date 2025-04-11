'use client'

import Header from "@/components/Header";
import "./Style.css"
import Image from "next/image";

import logo from '@/Image/papel_parede_feed.jpg'
import Avatar from "@/components/Avatar";
import { PiPencilLineBold } from "react-icons/pi";
import Post from "@/components/Post/Index";
import { FormEvent, useEffect, useState } from "react";
import axios from "axios";
import TextareaCustom from "@/components/TextAreaCustom";
import ButtonCustom from "@/components/ButtonCustom";

type Author = {
    name: string;
    role: string;
    avatarUrl: string;
}
type Comment = {
    id: string;
    author: Author;
    like: number;
    comment: string;
    publishedAt: Date
}
type Post = {
    id: string;
    author: Author;
    publishedAt: Date;
    content: string;
    comments: Comment[]
}

export default function Feed() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [content, setContent] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        loadPost();
    }, [])

    async function loadPost() {
        try {
            setIsLoading(true);
            const response = await axios.get("http://localhost:3001/posts");
            const postSort = response.data.sort((a: any, b: any) => (
                new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
            ))
            setPosts(postSort)
        } catch (e) {
            alert("ERROOOO")
        } finally {
            setIsLoading(false);
        }
    }

    async function handleCreatePost(event: FormEvent) {
        event.preventDefault()

        const post = {
            id: String(posts.length + 1),
            content: content,
            publishedAt: new Date().toISOString(),
            author: {
                name: "Breno Silva",
                role: "Full-Stack Developer",
                avatarUrl: "https://github.com/breno2121.png"
            }
        };
        await axios.post("http://localhost:3001/posts", post);

        await loadPost();
        setContent('');
    }
    return (
        <div>
            <Header />
            <div className="container">
                <aside className="sidebar">
                    <Image src={logo} alt="cover" className="cover" />

                    <div className="profile">
                        <Avatar src="https://github.com/breno2121.png" hasBorder />
                        <strong>Breno Silva</strong>
                        <span>Full-Stack Developer</span>

                        <footer>
                            <button className="button-edit-profile">
                                <PiPencilLineBold />
                                Editar seu perfil
                            </button>
                        </footer>
                    </div>
                </aside>
                <main className="main">
                    <form onSubmit={handleCreatePost} className="form-post">
                        <TextareaCustom
                            message={content}
                            setMessage={setContent}
                            title="O que você está pensando???"
                        />
                        <ButtonCustom text="Publicar" handle={() => { }} />
                    </form>

                    {isLoading ? (
                        <h1>Carregando...</h1>
                    ) : (
                        posts.map(item => (
                            <Post post={item} key={item.id} setPost={setPosts} />
                        ))
                    )}
                </main>
            </div>
        </div>
    )
}
