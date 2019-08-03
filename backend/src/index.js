const express = require('express')
const mongosse = require('mongoose')
const path = require('path')
const cors = require('cors')

const app = new express();

const server = require('http').Server(app)
const io = require('socket.io')(server)

app.use((req, res, next) => { // todas as requisições apos, terão acesso ao IO
    req.io = io
    next()
})

app.use(cors())

mongosse.connect('mongodb+srv://semana:semana@rocketomnistack-q9erf.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
})

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')))
app.use(require('./routes'))

server.listen(3001)