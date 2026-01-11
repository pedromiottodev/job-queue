import { app } from './app'

const port = Number(process.env.PORT) || 3000

app.listen(port, () => {
  console.log(`API rodando na porta ${port}`)
})

/*
server sobre apenas processo http
app concentra middlewares e rotas
arquitetura real de back end
*/