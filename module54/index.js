const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3213;

const users = [
    {id: 1, name: 'Mahbub', roll: 49},
    {id: 2, name: 'Moheb', roll: 50},
    {id: 3, name: 'Farhad', roll: 52},
]
app.use(cors())
app.use(express.json());

app.get('/', (req, res)=>{
    res.send("User Management System");
})

app.post('/users', (req, res)=>{
    console.log('client api hitting');
    const newUser = req.body;
    newUser.id = users.length+1;
    users.push(newUser)
    res.send(newUser)
})

app.get('/users', (req, res)=>{
    res.send(users)
})

app.listen(port, ()=>{
    console.log("Listening")
})