/**
 * This script is for deploying on netlify.
 */

const fs = require('fs')
const path = require('path')
    // delete yarn.lock

fs.unlinkSync(path.join(__dirname, 'yarn.lock'))