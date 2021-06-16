import Ghost, { GhostAPI } from '@tryghost/content-api'

export class GhostProvider {
    private static ghost: GhostAPI

    static get() {
        if (this.ghost) return this.ghost
        const url = this.getGhostURL()
        const key = this.getGhostKey()
        if (!url) return null
        if (!key) return null
        this.ghost = new Ghost({ url, key, version: "v3" })
        return this.ghost
    }

    private static getGhostKey() {
        const ghostKey = process.env.GHOST_KEY
        if (!ghostKey) return null
        return ghostKey
    }

    private static getGhostURL() {
        const ghostUrl = process.env.GHOST_URL
        if (!ghostUrl) return null
        return ghostUrl
    }
}