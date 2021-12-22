export interface LinkCategory {
    id: number
    name: string
    linkItems: LinkItem[] | []
}

export interface LinkItem {
    id: number
    url: string
    label: string
    category: number
}
