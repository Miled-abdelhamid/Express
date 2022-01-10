// require express
const express = require('express');

// create instance
const app = express();

// middleware body-parser
app.use(express.json());


// simple route
app.get('/', (req, res) => {
    res.send('Hello mariem')
})

// CRUD
let users = [
    {
        name: "Mariem",
        email: "mariem@gmail.com",
        id: 1
    },
    {
        name: "Khalil",
        email: "khalil@gmail.com",
        id : 2
    },
    {
        name: "AbedlHamid",
        email: "abdlhamide@gmail.com",
        id: 3
    }
]

// get all users
app.get('/users', (req, res) => {
    res.status(200).send({msg: "List of users", users})
})

// add user
app.post('/users/add_user', (req, res) => {
    const newUser = req.body;
    users= [ ...users, newUser ]
    res.status(200).send({msg: "User added" , newUser})
})

// create server
const port = 6000
app.listen(port, (error) => {
    error ? console.log(error)
    :
    console.log(`Server is runnig on port ${port} ...`)
})