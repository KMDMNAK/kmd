import { GHOST_KEY_PATH, GHOST_HOST } from '../environment'
import { readFileSync } from 'fs'
import { GhostContentAPIOptions, GhostAPI, } from '@tryghost/content-api'
import GhostContentAPI from '@tryghost/content-api'

export class GhostReader {
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
}

export const ghostReader = new GhostReader()