//순서 잘보기
const events = require("events");
const eventEmitter = new events.EventEmitter();

var connectHandler = function connected() {
    console.log("connection success!!!");

    eventEmitter.emit('data_recieved');
};

eventEmitter.on('connection', connectHandler);

eventEmitter.on('data_recieved', function() {
    console.log('data recieved success!!!');
});

eventEmitter.emit('connection');

console.log("Prongram finished!!!");