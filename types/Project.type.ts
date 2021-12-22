export interface Project {
    id: number
    title: string
    body: string
    url: string
    image: string
    stack: StackItem[]
}

export interface StackItem {
    tech_id: {
        name: string
        color: string
    }
}
