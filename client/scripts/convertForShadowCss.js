const { OUTPUT_DIRECTORY, CSS_FILENAMES } = require('./getCasper')
const fs = require('fs')
const path = require('path')
const REPLACES = {
    ":root": ".post-full-content",
    "#fff": "#D5DFD8"
}
const res = CSS_FILENAMES.map(fileName => {
    const filePath = path.join(OUTPUT_DIRECTORY, `${fileName}`)
    const txt = fs.readFileSync(filePath).toString()
    const convertedTxt = Object.entries(REPLACES).reduce((accum, prev) => {
        return accum.replaceAll(prev[0], prev[1])
    }, txt)
    return {
        filePath: `${filePath}.txt`,
        convertedTxt
    }
})
res.forEach(({ filePath, convertedTxt }) => {
    fs.writeFileSync(filePath, convertedTxt, { flag: 'w' })
})
