import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import { getArticlesHome } from 'api/queries/article.queries'
import { getAllCategories } from 'api/queries/category.queries'
import { ArticleHome } from 'types/Article.type'
import { Category } from 'types/Category.type'

export const getStaticProps: GetStaticProps = async () => {
    const articlesHome: ArticleHome[] = (await getArticlesHome()).data
    const categories: Category[] = (await getAllCategories()).data

    return {
        props: {
            articles: articlesHome,
            categories,
        },
    }
}

interface HomeProps {
    articles: ArticleHome[]
    categories: Category[]
}

const Home: NextPage<HomeProps> = ({ articles, categories }) => {
    return (
        <div>
            {categories.map(c => (
                <div key={c.id}>
                    <Link href={`/${c.slug}`}>{c.name}</Link>
                </div>
            ))}
            <br />
            {articles.map(a => (
                <div key={a.id}>
                    <Link href={`/${a.category.slug}/${a.slug}`}>
                        {a.title}
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Home
