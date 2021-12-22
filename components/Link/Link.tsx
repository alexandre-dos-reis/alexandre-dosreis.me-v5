import NextLink from 'next/link'

interface LinkInterfaceType {
    children: React.ReactNode
    className?: string
    href: string
    onMouseEnter?(arg: any): any
    onMouseLeave?(arg: any): any
    onClick?(arg: any): any
}

export default function LinkInterface({
    children,
    href,
    className,
    onMouseEnter,
    onMouseLeave,
    onClick,
}: LinkInterfaceType) {
    const isExternal = href.startsWith('http')
    if (isExternal) {
        return (
            <a
                href={href}
                rel="noreferrer"
                className={className}
                target="_blank"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onClick={onClick}
            >
                {children}
            </a>
        )
    } else {
        return (
            <NextLink href={href}>
                <a
                    className={className}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    onClick={onClick}
                >
                    {children}
                </a>
            </NextLink>
        )
    }
}
