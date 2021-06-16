import React from 'react'
import globalcss from './global.css.txt'
import screencss from './screen.css.txt'

const Casper = () => (
    <>
        <style >
            {globalcss}
            {screencss}
        </style>
    </>
)
export default Casper