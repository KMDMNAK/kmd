// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { ArticleConverter, ArticleProvider } from '@/modules/blog'

export type ArticleContetAPIResponse = { article: DataType.Article }
export default async (req: NextApiRequest, res: NextApiResponse<ArticleContetAPIResponse>) => {
    let postId = req.query.postId as string
    const articleProvider = new ArticleProvider()
    const converter = new ArticleConverter()
    const article = await articleProvider.getArticleContent(postId)
    res.status(200).json({
        article
    })
}
