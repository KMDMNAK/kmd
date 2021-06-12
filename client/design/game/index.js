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
const B = new Basket(200)


