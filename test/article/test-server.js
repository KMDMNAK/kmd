const express = require('express');
const app = express();

app.get('', (req, res) => {
    res.send(`
        <div>

        </div>
    `)
})

app.listen('3001');