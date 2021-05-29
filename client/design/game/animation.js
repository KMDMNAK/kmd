
class AnimationField {
    frameId = "frame"
    /**
     * @type {CanvasRenderingContext2D}
     */
    canvasCtx = null
    /**
     * @type {Apple[]}
     */
    apples = []
    /**
     * 
     * @param {Apple} apple 
     */
    constructor() {
        this.field = document.getElementById('field')
        if (!this.field) throw Error('No Field Element')
        this.count = 0
        // const canvas = document.getElementById(this.frameId)
        // this.canvasWidth = canvas.clientWidth
        // this.canvasHeight = canvas.clientHeight

        // this.canvasCtx = canvas.getContext('2d')
        this.apples = []
    }
    generateApple() {
        const x = Math.random() * 500 + 300
        this.apples.push(new Apple(this.field, x, 30, 3, 500))
    }

    update() {
        // this.canvasCtx.clearRect(0, 0, this.canvasWidth, this.canvasHeight)
        console.debug(this.count)
        if (this.count % 100 === 0) {
            this.generateApple()
        }
        this.apples = this.apples.filter(apple => {
            const isOver = apple.update()
            if (isOver) {
                this.field.removeChild(apple.doc)
            }
            return !isOver
            // this.canvasCtx.drawImage(this.apple.doc, x, y, 16, 16)
        })
        this.count++;
        requestAnimationFrame(this.update.bind(this))
    }
}

const af = new AnimationField()
requestAnimationFrame(af.update.bind(af))

// setInterval(af.update.bind(af), 1000)
