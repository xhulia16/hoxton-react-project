export type Article = {
    id: number
    title: string
    image: string
    description: string
    comments: Comment[]
}

export type Bookmark={
    id: number
    articleId: number
    article: Article
}

export type Comment={
 id: number
 content: string
 articleId: number
}