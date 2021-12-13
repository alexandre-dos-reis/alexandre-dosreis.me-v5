export interface ArticleHome {
    id: number
    title: string
    slug: string
    status: string
    category: { name: string; slug: string }
}

export interface Article {
    id: number
    status: string
    sort: null
    date_created: Date
    date_updated: Date
    title: string
    slug: string
    body: string
    image: string
    category: {
        name: string
        slug: string
    }
}
