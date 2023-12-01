const EventEmitter = require('events');
//note that if you use "const <any other variable asides EventEmittereg: eventJohnny> = require('events), then it means that when creating an instance of events(second code below), it would be "const Emitter = new eventJohnny.EventEmitter".
const util = require('util');

const Emitter = new EventEmitter();

//The code below is basically registering the event, "alarm". it takes a call back function as a second parameter, which in turn could take an argument if neccesary.
Emitter.on('alarm', (message) => {
    console.log('This is the first reaction and the message:' + message)
})

Emitter.on('alarm', reactionTwo)

function reactionTwo(message) {
    console.log(`this is the second reaction and the message: ${message}`)
}

//Emitter.emit('alarm', "Fuck you tony")

class Person {
    constructor(name) {
        this.name = name
    }
}

//Below this line is one of the methods that the inbuilt Util module offers.
// util.inherits(Person, EventEmitter)//when using the inherit method, it takes two arguments: The object/object constructor which is the first arguments, other object which it is to inherit both the properties and methods from.

const james = new Person('james')
const ozee = new Person('ozee')
const john = new Person('johnny')
util.inherits(Person, EventEmitter)

const people = [james, ozee, john]

people.forEach(function(person) {
    person.on('speak', (message)=> {
        console.log(`${person.name} says ${message}`)
    })
})

john.emit("speak", 'Hello Johnny, my creator')


