import express from 'express'

const app = express()

app.use(express.json())

app.use(express.urlencoded({extended: true}))

app.get('/', (req,res) =>{
    res.json({ status: 200, mensagem: "Servidor rodando!"})
})

const HOST = 'localhost'
const PORT = '5000'

app.listen(PORT, () => {
    console.log(`Servidor rodando em: http://${HOST}:${PORT}`)
})