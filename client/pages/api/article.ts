// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { ArticleConverter, ArticleProvider } from '@/modules/blog'

export type ArticleAPIResponse = { articles: DataType.SerializedArticle[] }
export default async (req: NextApiRequest, res: NextApiResponse<ArticleAPIResponse>) => {
    let page = parseInt(req.query.page as string)
    page = page ? page : 0
    const articleProvider = new ArticleProvider()
    const converter = new ArticleConverter()
    res.status(200).json({
        articles: (await articleProvider.getArticle(page)).map(converter.serialize)
    })
}
