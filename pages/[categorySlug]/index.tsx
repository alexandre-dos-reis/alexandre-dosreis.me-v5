import { motion } from 'framer-motion'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import {
    getArticlesByCategory,
    getArticlesHome,
} from 'api/queries/article.queries'
import { getAllCategories, getOneCategory } from 'api/queries/category.queries'
import Layout from 'components/Layout/Layout'
import { Article } from 'types/Article.type'
import { Category } from 'types/Category.type'

// A refactoriser, améliorer la requête...

export const getStaticPaths: GetStaticPaths = async () => {
    const categories: Category[] = await getAllCategories()

    const paths = categories.map(c => {
        return {
            params: {
                categorySlug: c.slug,
            },
        }
    })
    return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async context => {
    let articles: Article[]
    let currentCategory: Category
    const categories: Category[] = await getAllCategories()

    if (context.params?.categorySlug === 'articles') {
        articles = await getArticlesHome()
        currentCategory = {
            id: 0,
            name: 'Tous mes articles',
            slug: 'tous-mes-articles',
        }
    } else {
        currentCategory = (
            await getOneCategory(context.params?.categorySlug as string)
        )[0]
        articles = await getArticlesByCategory(currentCategory.slug)
    }

    // console.log(categoryRequested)

    return {
        props: {
            category: currentCategory,
            categories,
            articles,
        },
    }
}

interface CategoryProps {
    categories: Category[]
    category: Category
    articles: Article[]
}

const Category: NextPage<CategoryProps> = ({
    category,
    categories,
    articles,
}) => {
    const artLen = articles.length

    const style = { display: 'flex', justifyContent: 'space-between' }

    return (
        <Layout categories={categories} mode="single-section">
            <h2 style={style}>
                <span>{category.name}</span>
                <span>
                    {artLen === 0
                        ? ''
                        : ` ${artLen} article${artLen > 1 ? 's' : ''}`}
                </span>
            </h2>
        </Layout>
    )
}

export default Category
