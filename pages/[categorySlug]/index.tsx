import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { getAllCategories, getOneCategory } from 'api/queries/category.queries'
import { Category } from 'types/Category.type'

export const getStaticPaths: GetStaticPaths = async () => {
    const categories: Category[] = (await getAllCategories()).data

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
    const category: Category = (
        await getOneCategory(context.params?.categorySlug as string)
    ).data[0]

    return {
        props: {
            category,
        },
    }
}

interface CategoryProps {
    category: Category
}

const Category: NextPage<CategoryProps> = ({ category }) => {
    return <div>{category.name}</div>
}

export default Category
