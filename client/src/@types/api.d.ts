declare namespace API {
    type Article = {
        feature_image: string | null,
        title: string | null,
        updated_at: string | null,
        url: string | null,
        id: string | null,
        html?: string
    }
    namespace BlogPosts {
        type RequestBody = {
            limit: number
        }
        type ResponseBody = API.Article[]
    }
    namespace BlogPostPage {
        type ResponseBody = Partial<API.Article>
    }
}