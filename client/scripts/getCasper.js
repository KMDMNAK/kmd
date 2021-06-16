const fetch = require('node-fetch')
const path = require("path")
const fs = require('fs')

const CSS_FILENAMES = ["screen.css", "global.css"]
function getRawCss(fileName) {
    return `https://raw.githubusercontent.com/TryGhost/Casper/8fefeca41ba34da3d67d296c25062cb37599ab30/assets/built/${fileName}`
}

const OUTPUT_DIRECTORY = path.join(__dirname, "..", "components", "Casper")

CSS_FILENAMES.map(async fileName => {
    const res = await fetch(getRawCss(fileName))
    const text = await res.text()
    fs.writeFileSync(path.join(OUTPUT_DIRECTORY, `${fileName}`), text)
})

module.exports = {
    OUTPUT_DIRECTORY,
    CSS_FILENAMES
}