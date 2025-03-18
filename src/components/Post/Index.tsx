import Avatar from "../Avatar";
import "./Style.css";

type Author = {
    name: string;
    role: string;
    avatarUrl: string;
}

type PostProps = {
    post: {
        author: Author;
        publisheAt: Date;
        content: string;
    }

}

export default function Post({ post }: PostProps) {
    return (
        <article className="post">
            <header>
                <div className="author">
                    <Avatar src={"https://github.com/breno2121.png"} hasBorder />
                    <div className="author-info">
                        <strong>Breno Silva</strong>
                        <span>Desenvolvedor</span>
                    </div>
                </div>
                <time>
                    Publicado ha 2 semanas uteis
                </time>
            </header>
            <div className="content">
                <p>Hello Word
                    O serviço do Google, oferecido sem custo financeiro, traduz instantaneamente palavras, frases e páginas da Web do português para mais de cem outros idiomas.
                    O serviço do Google, oferecido sem custo financeiro, traduz instantaneamente palavras, frases e páginas da Web do português para mais de cem outros idiomas.
                    O serviço do Google, oferecido sem custo financeiro, traduz instantaneamente palavras, frases e páginas da Web do português para mais de cem outros idiomas.
                    O serviço do Google, oferecido sem custo financeiro, traduz instantaneamente palavras, frases e páginas da Web do português para mais de cem outros idiomas.
                    O serviço do Google, oferecido sem custo financeiro, traduz instantaneamente palavras, frases e páginas da Web do português para mais de cem outros idiomas.
                    O serviço do Google, oferecido sem custo financeiro, traduz instantaneamente palavras, frases e páginas da Web do português para mais de cem outros idiomas.
                    O serviço do Google, oferecido sem custo financeiro, traduz instantaneamente palavras, frases e páginas da Web do português para mais de cem outros idiomas.
                </p>
            </div>
            <form className="form">
                <strong>Deixe um comentario</strong>
                <textarea placeholder="Deixe um comentario" />
                <footer>
                    <button className="button-public">
                        Publicar
                    </button>
                </footer>
            </form>
        </article>

    )
}