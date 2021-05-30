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