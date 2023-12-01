const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('This is my server')
})

const port = 3722

server.listen(port, () => {
    console.log(`This server is running on ${port}`)
})
