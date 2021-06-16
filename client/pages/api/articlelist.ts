// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { ArticleConverter, ArticleProvider } from '@/modules/blog'

export type ArticleListAPIResponse = { articles: DataType.SerializedArticle[] }
export default async (req: NextApiRequest, res: NextApiResponse<ArticleListAPIResponse>) => {
    let page = parseInt(req.query.page as string)
    if (page < 0) {
        res.status(404)
        return res.end()
    }
    page = page ? page : 0
    const articleProvider = new ArticleProvider()
    const converter = new ArticleConverter()
    res.status(200).json({
        articles: (await articleProvider.getArticleList(page)).map(converter.serialize)
    })
}
