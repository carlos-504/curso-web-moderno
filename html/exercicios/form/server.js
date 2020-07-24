const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extend: true }))

app.post('/usuarios',(req, resp) => {
    console.log(req.body)
    resp.send('<h1>Parabéns. Usuário Incluído!</h1>')
})

app.post('/usuarios/:id',(req, resp) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Parabéns. Ususário alterado</h1>')
})

app.listen(3003)