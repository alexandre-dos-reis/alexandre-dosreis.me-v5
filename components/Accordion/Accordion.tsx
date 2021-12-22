import Link from 'next/link'
import { FC } from 'react'
import { LinkCategory } from 'types/Link.type'

interface AccordionProps {
    linkCategories: LinkCategory[]
}

// https://www.youtube.com/watch?v=kJk7EkyDNAA

const Accordion: FC<AccordionProps> = ({ linkCategories }) => {
    return (
        <ul>
            {linkCategories.map(c => (
                <li key={c.id}>
                    <h2>{c.name}</h2>
                    {c.linkItems.map(item => (
                        <Link key={item.id} href={item.url}>
                            {item.label}
                        </Link>
                    ))}
                </li>
            ))}
        </ul>
    )
}

export default Accordion
