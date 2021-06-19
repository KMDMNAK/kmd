class APICore {
    private fetch(url: string, headers: RequestInit, body: string | null = null) {
        return fetch(url, headers)
    }

    getArticleList(page: string) {
        const url = `/api/articlelist?page=${page}`
        return this.fetch(url, { method: "GET" })
    }

    getArticleContent(postId: string) {
        const url = `/api/articlecontent?postId=${postId}`
        return this.fetch(url, { method: "GET" })
    }
}

export default class APIProvider {
    static core: APICore
    static get() {
        if (!this.core) {
            this.core = new APICore()
        }
        return this.core
    }
}