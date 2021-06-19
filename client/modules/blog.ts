import EnvProvider from '@/modules/env'
import { GhostProvider } from './ghost'
import { PostOrPage } from '@tryghost/content-api'

const ghost2localArticle = (post: PostOrPage, containContent: boolean) => ({
    id: post.id,
    title: post.title,
    content: containContent ? post.html : "",
    createdAt: post.created_at ? new Date(post.created_at) : null,
    updatedAt: post.updated_at ? new Date(post.updated_at) : null,
    tags: post.tags ? post.tags.map(tag => tag.name) : []
}) as DataType.Article

export class ArticleProvider {
    private getNullArticle(): DataType.Article {
        return {
            id: "",
            title: "",
            content: "",
            createdAt: new Date(),
            updatedAt: new Date(),
            tags: []
        }
    }
    async getArticleList(startPage: number): Promise<DataType.Article[]> {
        if (startPage < 0) return []
        const articleNum = EnvProvider.getArticleListNumber()
        const api = GhostProvider.get()
        if (!api) return []
        const posts = await api.posts.browse({
            page: startPage + 1,
            limit: articleNum
        }).catch(e => {
            console.error(e.toString())
            return []
        })
        return posts.map(post => ghost2localArticle(post, false))
        // return ARTICLE_LIST.slice(
        //     articleNum * startPage, (1 + startPage) * articleNum
        // )
    }

    async getArticleContent(postId: string): Promise<DataType.Article> {
        const api = GhostProvider.get()
        if (!api) return this.getNullArticle()
        const read = await api?.posts.read({ id: postId }).catch(e => {
            console.error(e.toString())
            return null
        })
        return read ? ghost2localArticle(read, true) : this.getNullArticle()
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