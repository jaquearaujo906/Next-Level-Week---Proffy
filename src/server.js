//servidor
const express = require('express')
const server = express()

const {pageLanding, pageStudy, pageGiveClasses, saveClasses} = require('./pages')

//configurar nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true, 
})

//inicio e configuracao do servidor
server
//receber os dados do re body
.use(express.urlencoded({ extended: true }))
//configurar arquivos estaticos (css, scripts, imagens)
.use(express.static("public"))
//rota da aplicação
.get("/", pageLanding)
.get("/study", pageStudy) 
.get("/give-classes", pageGiveClasses)
.post("/save-class", saveClasses)
//start do servidor
.listen(5500)
