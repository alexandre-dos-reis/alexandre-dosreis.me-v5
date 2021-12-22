import styles from './IconHover.module.scss'

interface LinkIcon {
    children: React.ReactNode
    symbol?: string
    left?: string
    top?: string
    fontSize?: string
}

export default function IconHover({
    children,
    left = '-30px',
    top = '0px',
    symbol = '↪ ',
    fontSize = '1em',
}: LinkIcon) {
    return (
        <span className={styles.container}>
            <span className={styles.arrow} style={{ left, top, fontSize }}>
                {symbol}
            </span>
            {children}
        </span>
    )
}
