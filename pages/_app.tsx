import 'styles/app.scss'
import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps, router }: AppProps) {
    return (
        <AnimatePresence exitBeforeEnter initial={false}>
            <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
    )
}

export default MyApp
