import EnvProvider from '@/modules/env'

const ARTICLE_LIST: DataType.Article[] = [
    {
        id: "0",
        title: "First Article",
        content: "<p>This is First Article</p>",
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ["test", "test1"]
    }, {
        id: "1",
        title: "Second Article",
        content: "<p>This is Second Article</p>",
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ["test", "test2"]
    }, {
        id: "2",
        title: "Third Article",
        content: "<p>This is Third Article</p>",
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ["test", "test3"]
    }, {
        id: "3",
        title: "Forth Article",
        content: "<p>This is Forth Article</p>",
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ["test", "test4"]
    }, {
        id: "4",
        title: "Fifth Article",
        content: "<p>This is Fifth Article</p>",
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ["test", "test4"]
    }
]

export class ArticleProvider {
    async getArticle(startPage: number): Promise<DataType.Article[]> {
        const articleNum = EnvProvider.getArticleNumber()
        return ARTICLE_LIST.slice(
            articleNum * startPage, (1 + startPage) * articleNum
        )
    }
}


export class ArticleConverter {
    serialize(article: DataType.Article): DataType.SerializedArticle {
        return {
            ...article,
            createdAt: article.createdAt.toLocaleDateString(),
            updatedAt: article.updatedAt.toLocaleDateString(),
            tags: article.tags.join(",")
        }
    }
    deserialize(article: DataType.SerializedArticle): DataType.Article {
        return {
            ...article,
            createdAt: new Date(article.createdAt),
            updatedAt: new Date(article.updatedAt),
            tags: article.tags.split(",")
        }
    }
}