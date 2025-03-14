
import './Style.css'

type AvatarProps = {
    src: string;
    hasBorder: boolean
}

export default function Avatar({ src, hasBorder = false}: AvatarProps) {
    return(
        <img src={src} className={hasBorder ? 'avatar-width-boarder' : 'avatar'}/>
    )
}