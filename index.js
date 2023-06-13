const express = require('express');
const server = express();
server.use(express.json());


server.get('/hiya', (req, res) => {
    res.json({message: 'Hello folks!!!!!'})
})

const port = 9000;


server.listen(port, () => {
    console.log(`We're here live on port ${port} and we're ready to rock'n roll`)
})