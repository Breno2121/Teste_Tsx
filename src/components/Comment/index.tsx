import { RiDeleteBin6Line } from 'react-icons/ri'
import Avatar from '../Avatar'
import './style.css'
import { PiThumbsUp } from 'react-icons/pi'
import { ptBR } from 'date-fns/locale'
import { formatDistanceToNow } from 'date-fns'

type Author = {
    name: string;
    role: string;
    avatarUrl: string;
}

type CommentProps = {
    handleLike: (event: any, id: string) => void;
    handleDelete: (event: any, id: string) => void;
    comment: {
        id: string;
        like: number;
        author: Author;
        comment: string;
        publisheAt: Date;
    }
}

export default function Comment({ comment }: CommentProps) {

    const dateformat = formatDistanceToNow(comment.publisheAt, {
        locale: ptBR,
        addSuffix: true
    })

    return (
        <div className='comment'>
            <Avatar src={"https://github.com/breno2121.png"} hasBorder={false} />

            <div className='comment-box'>
                <div className="comment-content">
                    <header>
                        <div className='author-and-time'>
                            <strong>{comment.author.name}</strong>
                            <time>{dateformat}</time>
                        </div>

                        <button title='deletar-comentario'>
                            <RiDeleteBin6Line />
                        </button>
                    </header>

                    <p>{comment.comment}</p>

                </div>
                <footer>
                    <button>
                        <PiThumbsUp />
                        Aplaudir <span>{comment.like}</span>
                    </button>
                </footer>
            </div>
        </div>

    )
}