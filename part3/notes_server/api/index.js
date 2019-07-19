const http = require('http')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

let notes = [
    {
        id: 1,
        content: "HTML is easy",
        date: "2019-05-30T17:30:31.098Z",
        important: true
    },
    {
        id: 2,
        content: "Browser can execute only Javascript",
        date: "2019-05-30T18:39:34.091Z",
        important: false
    },
    {
        id: 3,
        content: "GET and POST are the most important methods of HTTP protocol",
        date: "2019-05-30T19:20:14.298Z",
        important: true
    }
]

// const app = http.createServer((request, response) => {
//     response.writeHead(200, { 'Content-Type': 'application/json' })
//     response.end(JSON.stringify(notes))
// })

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})
  
app.get('/notes', (req, res) => {
    res.json(notes)
})

app.get('/notes/:id', (req, res) => {
    res.json(notes.find(note => note.id == req.params.id))
})

app.post('/notes', (request, response) => {
    const note = request.body
    console.log(note)  
    response.json(note)
})
  
app.delete('/notes/:id', (request, response) => {
    notes = notes.filter(note => note.id != request.params.id)
    response.status(204).end()
})

// const port = 3001
// app.listen(port)
// console.log(`Server running on port ${port}`)

const PORT = 3001
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
})

// const http = require('http')

// const app = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' })
//   res.end('Hello World')
// })

// const port = 3001
// app.listen(port)
// console.log(`Server running on port ${port}`)