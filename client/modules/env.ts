
export default class EnvironmentProvider {
    static getArticleNumber(): number {
        const { DEFAULT_ARTICLE_NUMBER } = process.env
        const default_article_number = DEFAULT_ARTICLE_NUMBER ? parseInt(DEFAULT_ARTICLE_NUMBER) : 3
        return default_article_number
    }
}