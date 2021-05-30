const slider = interact('#basket')    // target elements with the "slider" class

class BacketPosition {
    x = 0
    setX(x) {
        this.x = x
    }
}
const backetPosition = new BacketPosition()

slider
    // Step 2
    .draggable({                        // make the element fire drag events
        origin: 'self',                   // (0, 0) will be the element's top-left
        inertia: false,                    // start inertial movement if thrown
        modifiers: [
            interact.modifiers.restrict({
                restriction: 'self'           // keep the drag coords within the element
            })
        ],
        // Step 3
        listeners: {
            move(event) {
                const value = event.pageX - parseInt(BASKET_WIDHT * 0.5)
                backetPosition.setX(value)
                event.target.style.paddingLeft = value + 'px'
            }
        }
    })


const BASKET_WIDHT = 64
const BASKET_HEIGHT = 64
const APPLE_WIDTH = 32
const APPLE_HEIGHT = 32

class Apple {
    id = "apple"
    y = 10
    x = 0
    speed = 10
    APPLE_SRC = "./apple.svg"
    /**
     * 
     * @param {*} x 
     * @param {*} speed 
     * @param {HTMLElement} field 
     */
    constructor(field, x, y, speed, MAX_Y) {
        // this.doc = document.getElementById(this.id)
        this.doc = new Image();
        new Setupper(this.doc, APPLE_WIDTH, APPLE_HEIGHT)
        this.doc.setAttribute("class", "apple")
        this.x = x
        this.y = y
        this.center = this.x + parseInt(APPLE_WIDTH * 0.5)
        this.speed = speed
        this.doc.src = this.APPLE_SRC
        this.doc.style.left = x
        this.doc.style.top = y
        this.MAX_Y = MAX_Y
        field.appendChild(this.doc)
    }
    update() {
        this.y += this.speed
        this.doc.style.top = this.y
        if (this.MAX_Y > this.y) {
            return false
        }
        return true
    }
}

class Basket {
    id = "basket"
    BASKET_SRC = "./wicker-basket-white.svg"

    constructor(bottom) {
        this.doc = document.getElementById(this.id)
        if (!this.doc) throw Error("No doc exists")
        new Setupper(this.doc, BASKET_WIDHT, BASKET_HEIGHT)
        this.doc.setAttribute('src', this.BASKET_SRC)
        this.bottom = bottom
        this.doc.style.bottom = this.bottom
        this.WIDTH = this.doc.offsetWidth
        this.HEIGHT = this.doc.offsetHeight
    }
}

class Setupper {
    /**
     * 
     * @param {HTMLElement} obj 
     * @param {*} widht 
     * @param {*} height 
     */
    constructor(obj, width, height) {
        obj.style.width = `${width}`
        obj.style.height = `${height}`
    }
}

class AnimationField {
    frameId = "field"
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
        this.field = document.getElementById(this.frameId)
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

const B = new Basket(30)
const af = new AnimationField(B, 600, 400)
requestAnimationFrame(af.update.bind(af))