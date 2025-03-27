import { formatDistanceToNow } from 'date-fns';
import Avatar from '../Avatar';
import './style.css';
import { PiThumbsUp, PiTrash } from 'react-icons/pi';
import { ptBR } from 'date-fns/locale';

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
        publishedAt: Date
    }
}
export default function Comment({ comment, handleDelete, handleLike }: CommentProps) {
    const dateFormat = formatDistanceToNow(comment.publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    return (
        <div className='comment'>
            <Avatar src={comment.author.avatarUrl} hasBorder={false} />
            <div className='comment-box'>
                <div className='comment-content'>
                    <header>
                        <div className='author-and-time'>
                            <strong>{comment.author.name}</strong>
                            <time>{dateFormat}</time>
                        </div>
                        <button title='Deletar comentário' onClick={(event) => handleDelete(event, comment.id)}>
                            <PiTrash size={24} />
                        </button>
                    </header>
                    <p>{comment.comment}</p>
                </div>
                <footer>
                    <button onClick={(event) => handleLike(event, comment.id)}>
                        <PiThumbsUp />
                        Apludir <span>{comment.like}</span>
                    </button>
                </footer>
            </div>
        </div>

    )
}