const express = require('express')
const phones = require('./phones.json')
const app = express()
var cors = require('cors')
const port = 3213

app.use(cors())

app.get('/', (req, res)=>{
    res.send('Hello World')
})

app.get('/data', (req, res)=>{
    res.send('Hello World Data')
})

app.get('/phones', (req, res)=>{
    res.send(phones)
})

app.get('/phones/:id', (req, res)=>{
    const phoneId = parseInt(req.params.id);
    const phone = phones.find(phone=>phone.id === phoneId);
    res.send(phone)
    // console.log(phoneId)
})

app.listen(port, ()=>{
    console.log(`listening port ${port}`)
})