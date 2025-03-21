import "./Style.css"

type TextAreaProps = {
    message: string;
    setMessage: (value: string) => void;
    title: string;
}


export default function TextAreaCustom({message, setMessage, title}: TextAreaProps) {
    return (
        <textarea placeholder={title}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
        />
    )
}