import styled from 'styled-components'
import styles from './ArticleHomeLink.module.scss'
import IconHover from 'components/IconHover/IconHover'
import Link from 'components/Link/Link'
import type { ArticleListItem } from 'types/Article.type'

const LinkContainer = styled.div`
    a {
        position: relative;
        color: white;
        font-family: 'alatsi';
    }
`

interface ArticleHomeLinkProps {
    articleItem: ArticleListItem
}

const ArticleHomeLink = ({ articleItem }: ArticleHomeLinkProps) => {
    return (
        <li>
            <LinkContainer>
                <Link
                    href={`/${articleItem.category.slug}/${articleItem.slug}`}
                    className="{styles.link}"
                >
                    <IconHover left="-35px" top="-9px" fontSize="1.4em">
                        {articleItem.title}
                    </IconHover>
                </Link>
            </LinkContainer>
        </li>
    )
}
export default ArticleHomeLink
