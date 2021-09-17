const express = require('express')
const app= express()
const http= require ('http')
const server= http.createServer(app)
const port =3000

app.get('/', ()=>{
    res.status(200).send(`Server running at port ${port}`)
})

app.listen(port, ()=>{
    console.log(`Server running at port ${port}`)
})