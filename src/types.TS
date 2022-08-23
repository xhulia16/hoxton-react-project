export type Article = {
    id: number
    title: string
    image: string
    description: string
}

export type Bookmark={
    id: number
    articleId: number
    article: Article
}