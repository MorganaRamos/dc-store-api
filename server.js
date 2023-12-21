import express from 'express'
import db from './model/index.js'
import { routeProduto } from './routes/produto.routes.js'

const app = express()

app.use(express.json())

app.use(express.urlencoded())

db.connection.sync({force: true})
.then(() =>{
    console.log('drop and re-synq DB')
})
.catch((err)=>{
    console.log('failed to sync db' + err.message)
})
app.get('/', (req,res) =>{
    res.json({ status: 200, mensagem: "Servidor rodando!"})
})

routeProduto(app)

const HOST = 'localhost'
const PORT = 5000

app.listen(PORT, () => {
    console.log(`Servidor rodando em: http://${HOST}:${PORT}`)
})