import express from 'express'

export const app = express()

app.use(express.json())


/*
app = configuração da aplicação
não escuta porta
reutilizável (API, testes, worker)
*/