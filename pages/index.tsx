import { motion } from 'framer-motion'
import { bundleMDX } from 'mdx-bundler'
import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import * as React from 'react'
import { getArticlesHome } from 'api/queries/article.queries'
import { getAllCategories } from 'api/queries/category.queries'
import { getCv } from 'api/queries/cv.queries'
import { getHomePresentation } from 'api/queries/home.queries'
import ArticleHomeLink from 'components/Article/ArticleHomeLink'
import Layout from 'components/Layout/Layout'
import MdxRender from 'components/mdx/utils/MdxRender'
import { ArticleListItem } from 'types/Article.type'
import { Category } from 'types/Category.type'

export const getStaticProps: GetStaticProps = async () => {
    const articleListItems: ArticleListItem[] = await getArticlesHome()
    const categories: Category[] = await getAllCategories()
    const imageSrc: string =
        process.env.API_URL + '/assets/' + (await getCv()).image

    const { code } = await bundleMDX({
        source: (await getHomePresentation()).body,
    })

    return {
        props: {
            articleListItems,
            categories,
            imageSrc,
            code,
        },
        revalidate: 60,
    }
}

interface HomeProps {
    articleListItems: ArticleListItem[]
    categories: Category[]
    imageSrc: string
    code: string
}

const Home: NextPage<HomeProps> = ({
    articleListItems,
    categories,
    imageSrc,
    code,
}) => {
    return (
        <Layout mode="home" categories={categories}>
            {/* <motion.picture
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
            </motion.picture> */}
            <motion.section
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <h2>Bienvenue.</h2>
                <MdxRender string={code} />
            </motion.section>
            <motion.aside
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <h2>Publiés récemment</h2>
                <ul>
                    {articleListItems.map(articleItem => (
                        <ArticleHomeLink
                            key={articleItem.id}
                            articleItem={articleItem}
                        />
                    ))}
                </ul>
            </motion.aside>
        </Layout>
    )
}

export default Home
