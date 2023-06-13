const express = require('express');
const server = express();
server.use(express.json());

server.get('/hiya', (req, res) => {
    res.json({message: 'Hello folks!!!!!'})
})

const port = process.env.PORT || 9000;


server.listen(port, () => {
    console.log(`We're here live on port ${port} and we're ready to rock'n roll`)
})

const users = [{id: 1, name: 'Brad'}, {id: 2, name: 'Mandy'}, {id: 3, name: 'Cap'}, {id: 4, name: 'Harper'}]

server.get('/api/users', (req, res) => {
    res.json(users)
});

server.post('/api/users', (req, res) => {
    const { id, name } = req.body;
    users.push({id: users.length+1, name: name})
    res.status(200).json({id: id, name: name})
});

server.post('/api/login', (req, res) => {
    const { username, password } = req.body

    if (username && password) {
        res.status(200).json({message: "Well hello there! Come on in and enjoy this website!!"})
    } else {
        res.status(500).json({message: "Go away."})
    }

})