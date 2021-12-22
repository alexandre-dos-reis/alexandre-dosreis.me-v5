import { motion } from 'framer-motion'
import { bundleMDX } from 'mdx-bundler'
import type { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import { getAllCategories } from 'api/queries/category.queries'
import { getCv } from 'api/queries/cv.queries'
import Layout from 'components/Layout/Layout'
import MdxRender from 'components/mdx/utils/MdxRender'
import { Article } from 'types/Article.type'
import { Category } from 'types/Category.type'
import { Cv } from 'types/Cv.type'

export const getStaticProps: GetStaticProps = async () => {
    const categories: Category[] = await getAllCategories()
    const cv: Cv = await getCv()

    const { code } = await bundleMDX({
        source: cv.body,
    })

    const imageSrc = process.env.API_URL + '/assets/' + cv.image

    return {
        props: {
            categories,
            code,
            imageSrc,
        },
    }
}

interface ArticlesProps {
    categories: Category[]
    articles: Article[]
    code: string
    imageSrc: string
}

const Articles: NextPage<ArticlesProps> = ({
    categories,
    articles,
    code,
    imageSrc,
}) => {
    return (
        <Layout categories={categories} mode="single-section">
            <h1>CV</h1>
            <motion.picture
                animate={{ y: 0, opacity: 1 }}
                initial={{ y: 10, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                <Image
                    src={imageSrc}
                    alt="Image du créateur"
                    width={200}
                    height={200}
                />
            </motion.picture>
            <MdxRender string={code} />
        </Layout>
    )
}

export default Articles
