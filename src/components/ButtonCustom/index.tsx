import "./Style.css"

type ButtonCustomProps = {
    text?: string;
    handle: () => void;
}

export default function ButtonCustom({text, handle}: ButtonCustomProps) {
    return (
        <button type="submit" className="button-custom" onClick={handle}>
            Publicar
        </button>
    )
}