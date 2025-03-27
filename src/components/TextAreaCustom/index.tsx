import "./Style.css";

type TextareaProps = {
    message: string;
    setMessage: (value: string) => void;
    title: string
}

export default function TextareaCustom({ message, setMessage, title }: TextareaProps) {

    return (
        <textarea
            placeholder={title}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
        />
    )
}