import interact from 'interactjs'

class Basket {
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


class BasketSlider {
    slider: Interact.Interactable
    constructor(private id: string) {
        this.slider = interact(this.id)
    }
    registerDragEvent(moveEvent: (event: MouseEvent) => void) {
        this.slider.draggable({
            origin: 'self',
            inertia: false,
            modifiers: [
                interact.modifiers.restrict({
                    restriction: 'self'
                })
            ],
            listeners: {
                move: moveEvent
                // move(event) {
                //     // const value = event.pageX - parseInt(BASKET_WIDHT * 0.5)
                //     // backetPosition.setX(value)
                //     // event.target.style.paddingLeft = value + 'px'
                // }
            }
        })
    }
}