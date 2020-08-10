const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const porta = 8080

// Servindo o conteúdo estático (colocando pra rodar no localhost)
app.use(express.static('.'))
// bodyParser vai pegar toda requisição e transformar em objeto
app.use(bodyParser.urlencoded({ extended: true }))
// Todo json que vier vai ser transformado em objeto
app.use(bodyParser.json())

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './upload')
    },
    filename: function (req, file, callback){
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage }).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end('Ocorreu um erro.')
        }

        res.end('Concluído com sucesso')
    })
})

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 1
    })
})

app.get('/parOuImpar', (req, res) => {
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})

app.listen(porta, () => console.log(`Executando na porta ${porta}`))