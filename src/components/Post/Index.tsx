'use client'

import { Dispatch, DispatchWithoutAction, FormEvent, SetStateAction, useState } from "react";
import Avatar from "../Avatar";
import { v4 as uuid } from "uuid";
import "./Style.css";
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import axios from "axios";
import TextAreaCustom from "../TextAreaCustom";
import ButtonCustom from "../ButtonCustom";
import Comment from "../Comment";

type Author = {
    name: string;
    role: string;
    avatarUrl: string;
}
type Post = {
    id: string;
    author: Author;
    publishedAt: Date;
    content: string;
    comments: Comment[];
}
type Comment = {
    id: string;
    like: number;
    author: Author;
    comment: string;
    publisheAt: Date;
}

type PostProps = {
    setPost: Dispatch<SetStateAction<Post[]>>,
    post: Post;
}

export default function Post({ post, setPost }: PostProps) {
    const [newComment, setNewComment] = useState<string>('');

    async function loadPost() {
        const response = await axios.get(`http://localhost:3001/posts/${post.id}`);

        //ATUALIZA POSICAO ESPECIFICA DE ESTADO
        setPost((prev: Post[]) =>
            prev.map(atual => (
                atual.id === post.id ? response.data : atual
            ))
        )
    }

    async function handleCreateNewComment(event: FormEvent) {
        event.preventDefault();

        const comment = {
            id: uuid(),
            comment: newComment,
            publishedAt: new Date().toISOString(),
            like: 0,
            author: {
                name: "Breninho",
                role: "Desocupado",
                avatarUrl: "http://github.com/breno2121.png"
            }
        }

        const comments = post.comments?.length ? [...post.comments, comment] : [comment]

        await axios.patch(`http://localhost:3001/posts${post.id}`, {
            "comments": comments
        })

        loadPost();
        setNewComment('');
    }

    async function handleDeleteComment(event: MouseEvent, id: string) {
        event.preventDefault();
        
        const commentsFilter = posts.comments.filter(comment => comment.id !== id);
        await axios.patch(`http://localhost:3001/posts/${post.id}`), {
            "comments": commentsFilter
        }}
    
        async function handleLikeComment(event: MouseEvent) {
        event.preventDefault();
        
            const commentUpdated = post.comments.map(comment => {
                if(comment.id === id) {
                    return (...comment, like: Comment.like + 1);
                }
            })

    }

    const dateformat = formatDistanceToNow(post.publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    return (
        <article className="post">
            <header>
                <div className="author">
                    <Avatar src={post.author.avatarUrl} hasBorder />
                    <div className="author-info">
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>
                <time>
                    {dateformat}
                </time>
            </header>
            <div className="content">
                <p>
                    {post.content}
                </p>
            </div>
            <form className="form" onSubmit={handleCreateNewComment}>
                <strong>Deixe um comentario</strong>
                <TextAreaCustom
                    message={newComment}
                    setMessage={setNewComment}
                    title="Deixe um comentario"
                />
                <footer>
                    <ButtonCustom />
                </footer>
            </form>

            {post.comments?.length && post.comments.map(item => (
                < Comment key={item.id} comment={item} handleDelete={handleDeleteComment} handleLike={handleLikeComment} />
            ))}
        </article>
    )
}