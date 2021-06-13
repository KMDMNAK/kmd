declare namespace DataType {
    type Article = {
        id: string
        title: string
        content: string
        createdAt: Date
        updatedAt: Date
        tags: string[]
    }
    type SerializedArticle = { [P in keyof Article]: string }
}