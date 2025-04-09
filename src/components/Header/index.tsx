import Image from 'next/image'
import logo from '@/Image/ignite-logo.svg'
import './Style.css'

export default function Header() {
    return (
        <header className="header">
            <Image src={logo} alt='Logo' />
        <h1>Feed</h1>
        </header>
    )
}