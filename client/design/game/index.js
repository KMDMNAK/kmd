const BASKET_WIDHT = 128
const BASKET_HEIGHT = 128
const APPLE_WIDTH = 64
const APPLE_HEIGHT = 64

class Apple {
    id = "apple"
    y = 10
    x = 0
    speed = 10

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
        this.speed = speed
        field.appendChild(this.doc)
        this.doc.onload = () => {

        }
        this.doc.src = "./apple.svg"
        this.doc.style.left = x
        this.doc.style.top = y
        this.MAX_Y = MAX_Y
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
    constructor() {
        this.doc = document.getElementById(this.id)
        if (!this.doc) throw Error("No doc exists")
        new Setupper(this.doc, BASKET_WIDHT, BASKET_HEIGHT)
        this.img = new Image();
        this.img.onload = function () {
            // ctx.drawImage(img, 0, 0);
        }
        this.img.src = "./basket.svg"
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

const B = new Basket()


