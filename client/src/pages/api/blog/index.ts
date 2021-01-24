import { ghostReader } from '../../../modules/ghost'
import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {

    if (req.method !== "POST") {
        res.statusCode = 401
        res.end('end')
        return
    }
    const body: API.BlogPosts.RequestBody = req.body
    // const { limit }: API.BlogPosts.RequestBody = JSON.parse(body)
    const { limit } = body
    const posts = await ghostReader.client.posts.browse({ limit })
    const resBody: API.BlogPosts.ResponseBody = posts.map(({ title, updated_at, feature_image, url, id, html }) => ({ title, updated_at, feature_image, url, id, html })) as any
    res.setHeader('content-type', 'application/json')
    res.end(JSON.stringify(resBody))
    console.debug('send response')
    return
}