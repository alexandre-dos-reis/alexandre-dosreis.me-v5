import styled from 'styled-components'
import Link from 'components/Link/Link'
import type { ArticleListItem } from 'types/Article.type'

const ArticleCard = styled.div`
    img {
        width: 100px;
        height: 100px;
        object-fit: contain;
    }
`

interface ArticleCardProps {
    article: ArticleListItem
}

export default function ArticleCardLink({ article }: ArticleCardProps) {
    return (
        <ArticleCard>
            <Link href={`/${article.category.slug}/${article.slug}`}>
                {article.title}
            </Link>
        </ArticleCard>
    )
}
