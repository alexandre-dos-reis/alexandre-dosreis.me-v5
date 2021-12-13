import fetchData from './fetchData'

const ITEM = 'article'

export const getMdxImport = async () => await fetchData('mdxImport?fields=body')

export const getArticlesHome = async () =>
    await fetchData(
        ITEM +
            '?' +
            'fields=id,title,slug,status,category.name,category.slug' +
            '&' +
            'sort=-date_updated' +
            '&' +
            'filter[status]=published' +
            '&' +
            'limit=10'
    )

export const getOneArticle = async (slug: string) =>
    await fetchData(
        ITEM +
            '?' +
            `search=${slug}` +
            '&' +
            'fields=*,category.name,category.slug' +
            '&' +
            'filter[status]=published'
    )
