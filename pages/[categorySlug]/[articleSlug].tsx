import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
    getOneArticle,
    getArticlesHome,
    getMdxImport,
} from 'api/queries/article.queries'
import { ArticleHome, Article } from 'types/Article.type'

export const getStaticPaths: GetStaticPaths = async () => {
    const articlesHome: ArticleHome[] = (await getArticlesHome()).data

    const paths = articlesHome.map(a => {
        return {
            params: {
                articleSlug: a.slug,
                categorySlug: a.category.slug,
            },
        }
    })

    return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async context => {
    const article: Article = (
        await getOneArticle(context.params?.articleSlug as string)
    ).data[0]

    const imageUrl = process.env.API_ASSETS + article.image

    const mdxImport: string = (await getMdxImport()).data.body

    // Import MDX convert function

    return {
        props: {
            mdxImport,
            article,
            imageUrl,
        },
    }
}

interface ArticleProps {
    article: Article
    imageUrl: string
}

const Home: NextPage<ArticleProps> = ({ article, imageUrl }) => {
    return (
        <div>
            <div>
                <Image src={imageUrl} alt="OK" width={200} height={200} />
            </div>
            <Link href={`/${article.category.slug}`}>
                {article.category.name}
            </Link>
            <div>{article.title}</div>
            <div>{article.body}</div>
        </div>
    )
}

export default Home
