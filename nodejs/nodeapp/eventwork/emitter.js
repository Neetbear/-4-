const events = require("events");
const { EventEmitter } = require("stream");
const eventsEmitter = new events.EventEmitter();

var listener1 = function listener1() {
    console.log("listener1 executed!!!");
};

var listener2 = function listener2() {
    console.log("listener2 executed!!!")
};

var listener3 = function listener3() {
    console.log("listener3 executed!!!")
};

// Bind the connection event with the listener1
eventsEmitter.addListener('connection', listener1);
eventsEmitter.addListener('connection', listener2);
eventsEmitter.on('connection', listener3);
// connection에 대한 이벤트가 2개가 됨
// on은 등록 addListener는 추가?

var eventListener = require("events").EventEmitter.listenerCount(eventsEmitter, 'connection');
console.log(eventListener + " Listener(s) listening to connection event!!!");

eventsEmitter.emit('connection');

eventsEmitter.removeListener('connection', listener3);
console.log("Listener3 will be removed!!!");

var eventListener = require("events").EventEmitter.listenerCount(eventsEmitter, 'connection');
console.log(eventListener + " Listener(s) listening to connection event!!!");

eventsEmitter.emit('connection');

console.log("Finished Program!!!")

