export type Article = {
    id: number
    title: string
    image: string
    description: string
    comments: Comment[]
}

export type Bookmark = {
    id: number
    articleId: number
    article: Article
    userId: number
}

export type Comment = {
    id: number
    content: string
    articleId: number
}

export type User = {
    id: string
    name: string
    email: string
    password: string
}