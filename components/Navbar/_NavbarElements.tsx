import Link from 'components/Link/Link'

interface JsonLink {
    title: string
    url: string
}

interface NavBarElementsProps {
    links: JsonLink[]
    className: string
}

export default function NavbarElements({
    links,
    className,
}: NavBarElementsProps) {
    return (
        <>
            {links.map((l, i) => (
                <li key={i}>
                    <Link href={l.url}>{l.title}</Link>
                </li>
            ))}
        </>
    )
}
