const fs = require('fs')

const readMe = fs.readFileSync('readMe.txt', 'utf8')//used to read the contents of a file. It takes two arguments(strings), the file name and the character encoding. You would typically want to store it in a variable. Note that this is synchronous.


//code//fs.writeFileSync('writeMe.txt', readMe)

//For the async counterpart - you do not need to store it in a variable, and it takes three arguments, of which the last is a call bank function which in turn takes two arguments(error, data) - look below-
/*fs.readFile('readMe.txt', 'utf8', function(err, data) {
    fs.writeFileSync('writeMe.txt', data)
})*/

//You can easily delete files using the below code:
/*fs.unlink('deleted.txt', (err, data) => {
    console.log(err)
})*/ //Make sure that the file exists, or else you would get an error.

//To make directories(asynchronously{always takes a callback function}) - if you want to do it syncronously, use the mkdirSync.
fs.mkdir('stuff', ()=> {
    fs.readFile('readMe.txt', 'utf-8', (err, data) => {
        fs.writeFile('./stuff/create.txt',data, function(){})//note that this creates a file in the directory.
    })
})//to remove it, just replace mk with rm! (note that you cannot remove a directory except it is empty, so you have to delete the files in it first by using fs.unlink, then in the call back function, you remove the directory using fs.rmdir{assumption is that it is asynchronous. Also, take note of path to folders, very important})