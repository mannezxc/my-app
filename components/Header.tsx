import Link from "next/link";


export default function Header() {
    return (
        <header>
            <Link href={'/'}>Main</Link>
            <Link href={'/blog'}>Blog</Link>
            <Link href={'/about'}>About</Link>
        </header>
    )
}