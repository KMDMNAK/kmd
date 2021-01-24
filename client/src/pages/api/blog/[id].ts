import { ghostReader } from '../../../modules/ghost'
import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const {
        query: { id },
    } = req

    if (typeof id === "object") {
        res.statusCode = 401
        res.end('end')
        return
    }
    console.debug({ url: req.url, id })
    const post = await ghostReader.client.posts.read({ id })
    res.setHeader('content-type', 'text/html')
    res.send(post.html)
    return
}