const http = require('http')
const fs = require('fs')
const EventEmitter = require('events')

const myReadStream = fs.createReadStream(`${__dirname}/readstream.txt`, 'utf-8')
const myWriteStream = fs.createWriteStream(`${__dirname}/writtenstream.txt`)

myReadStream.on('data', (chunk) => {
    console.log(`new chunk received: ${chunk}`)
    myWriteStream.write(chunk)
})

