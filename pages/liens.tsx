import { GetStaticProps, NextPage } from 'next'
import { getAllCategories } from 'api/queries/category.queries'
import { getLinkCategories } from 'api/queries/linkCategory.queries'
import { getLinkItems } from 'api/queries/linkItem.queries'
import Accordion from 'components/Accordion/Accordion'
import Layout from 'components/Layout/Layout'
import Link from 'components/Link/Link'
import { Category } from 'types/Category.type'
import { LinkCategory, LinkItem } from 'types/Link.type'

export const getStaticProps: GetStaticProps = async () => {
    const categories: Category[] = await getAllCategories()
    const linkCategories: LinkCategory[] = await getLinkCategories()
    const linkItems: LinkItem[] = await getLinkItems()

    linkCategories.map(
        category =>
            (category.linkItems = linkItems.filter(
                item => item.category === category.id
            ))
    )

    return {
        props: {
            categories,
            linkCategories,
        },
        revalidate: 60,
    }
}

interface ProjetsProps {
    categories: Category[]
    linkCategories: LinkCategory[]
}

const Liens: NextPage<ProjetsProps> = ({ categories, linkCategories }) => {
    return (
        <Layout mode="single-section" categories={categories}>
            <h1>Liens</h1>
            <Accordion linkCategories={linkCategories} />
        </Layout>
    )
}

export default Liens
