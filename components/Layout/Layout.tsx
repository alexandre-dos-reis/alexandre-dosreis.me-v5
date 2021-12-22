import { motion } from 'framer-motion'
import { NextPage } from 'next'
import styles from './Layout.module.scss'
import Navbar from 'components/Navbar/Navbar'
import { Category } from 'types/Category.type'

interface LayoutProps {
    mode: 'home' | 'single-section' | 'public' | 'admin' | 'empty' | 'article'
    categories: Category[]
    children: React.ReactNode
}

const transition = { duration: 0.4, type: 'easeInOut', staggerChildren: 0.3 }

const initial = { y: 20, opacity: 0 }

const animate = { y: 0, opacity: 1 }

const exit = { y: 20, opacity: 0 }

const Layout: NextPage<LayoutProps> = ({ mode, children, categories }) => {
    return (
        <>
            <header className={styles.header}>
                {mode === 'home' && (
                    <Navbar mode="public" categories={categories} />
                )}

                {mode === 'article' && (
                    <Navbar mode="public" categories={categories} />
                )}

                {mode === 'single-section' && (
                    <Navbar mode="public" categories={categories} />
                )}

                {/* {mode === "admin" && <Navbar mode="admin" />} */}
            </header>
            {mode === 'home' && (
                <motion.main
                    initial={initial}
                    animate={animate}
                    transition={transition}
                    exit={exit}
                    className={styles.homeLayout}
                >
                    {children}
                </motion.main>
            )}
            {mode === 'article' && (
                <motion.main
                    initial={initial}
                    animate={animate}
                    transition={transition}
                    exit={exit}
                    className={styles.articleLayout}
                >
                    {children}
                </motion.main>
            )}
            {mode === 'single-section' && (
                <motion.main
                    initial={initial}
                    animate={animate}
                    transition={transition}
                    exit={exit}
                    className={styles.singleSectionLayout}
                >
                    <section>{children}</section>
                </motion.main>
            )}

            <motion.footer
                initial={initial}
                animate={animate}
                transition={transition}
                exit={exit}
                className={styles.footer}
            >
                © {new Date().getFullYear()} Alexandre Dos Reis, tous droits
                réservés
            </motion.footer>
        </>
    )
}

export default Layout
