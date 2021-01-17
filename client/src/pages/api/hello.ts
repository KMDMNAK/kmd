import { IncomingMessage, ServerResponse } from 'http'
import { GHOST_KEY_PATH, GHOST_HOST } from '../../environment'
import { readFileSync } from 'fs'
import { GhostContentAPIOptions, GhostAPI, } from '@tryghost/content-api'
import GhostContentAPI from '@tryghost/content-api'

class GhostReader {
    ghostKey: string
    host: string
    client: GhostAPI
    constructor() {
        this.ghostKey = readFileSync(GHOST_KEY_PATH).toString()
        this.host = GHOST_HOST
        this.client = new GhostContentAPI(this.getGhostOptions())
    }
    getGhostOptions() {
        const options: GhostContentAPIOptions = {
            url: this.host,
            key: this.ghostKey,
            version: "v3"
        }
        return options
    }
    async posts() {
        const posts = await this.client.posts
            .browse({ limit: 5 })
        posts.forEach((post) => {
            console.debug(post.title);
        });
        return posts.map(post => post.title).filter(_ => _)
    }
}

export default (req: IncomingMessage, res: ServerResponse) => {
    const ghostReader = new GhostReader()
    ghostReader.posts().then(posts => {
        res.end(JSON.stringify(posts))
    })
}