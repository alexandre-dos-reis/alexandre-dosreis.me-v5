import { NextPage } from 'next'
import { useState } from 'react'
import styles from './DropDownMenu.module.scss'
import Link from 'components/Link/Link'
import { Category } from 'types/Category.type'

interface DropDownMenuProps {
    title: string
    categories: Category[]
}

const DropDownMenu: NextPage<DropDownMenuProps> = ({ title, categories }) => {
    const [isActive, setIsActive] = useState(false)

    return (
        <div
            onMouseEnter={() => setIsActive(true)}
            onMouseLeave={() => setIsActive(false)}
            onClick={() => setIsActive(false)}
            className={styles.container}
        >
            <Link href="/articles">{title}</Link>
            <div className={isActive ? styles.active : styles.inactive}>
                <svg
                    className={styles.arrow}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                >
                    <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                </svg>
                {categories.map(c => (
                    <Link
                        key={c.id}
                        href={`/${c.slug}`}
                        onClick={() => setIsActive(false)}
                    >
                        {c.name}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default DropDownMenu
