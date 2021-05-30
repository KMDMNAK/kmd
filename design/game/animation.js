
class AnimationField {
    frameId = "frame"
    /**
     * @type {Apple[]}
     */
    apples = []

    score = 0
    /**
     * 
     * @param {Basket} basket 
     */
    constructor(basket, fieldWidth, fieldHeight) {
        this.field = document.getElementById('field')
        if (!this.field) throw Error('No Field Element')
        this.field.style.width = fieldWidth
        this.field.style.height = fieldHeight
        this.fieldWidth = fieldWidth
        this.fieldHeight = fieldHeight
        this.backetWidth = basket.WIDTH
        this.count = 0
        this.criterionHeight = fieldHeight - parseInt(basket.bottom * 0.5)
        this.APPLE_DISAPPEAR_HEIGHT = fieldHeight
        this.apples = []
    }

    getBacketPosition() {
        return backetPosition.x
    }

    addScore() {
        this.score++;
    }

    generateApple(appleSpeed) {
        const x = Math.random() * 500 + 300
        this.apples.push(new Apple(this.field, x, 30, appleSpeed, this.APPLE_DISAPPEAR_HEIGHT))
    }

    update() {
        if (this.count % 101 === 0) {
            this.generateApple(3)
            this.count = 1
        }
        const backetX = this.getBacketPosition()
        this.apples = this.apples.filter(apple => {
            const isOver = apple.update()
            if (isOver) {
                this.field.removeChild(apple.doc)
                return false
            }
            if (this.criterionHeight < apple.y) {
                if (apple.center >= backetX && apple.center - backetX <= this.backetWidth) {
                    this.addScore()
                    this.field.removeChild(apple.doc)
                    return false
                }
            }
            return true
        })
        this.count++;
        requestAnimationFrame(this.update.bind(this))
    }
}

const af = new AnimationField(B, 600, 450)
requestAnimationFrame(af.update.bind(af))