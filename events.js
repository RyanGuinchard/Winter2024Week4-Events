const EventEmitter = require('events');
class MyEmitter extends EventEmitter {};

const myEmitter = new MyEmitter();

myEmitter.on('event', ()=>{
    console.log('event occurred');
});

myEmitter.on('event2', ()=>{
    console.log('event2 occurred');
});

myEmitter.emit('event')