const http = require('http');
const server = http.createServer((req, res) => {
    console.log(`request was made by ${req.url}`)
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('Hello, World!')
})

const port = 3000;
server.listen(port, ()=> {
    console.log('This is running at port nna gi')
})
