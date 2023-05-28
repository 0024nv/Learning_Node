// Node.JS has a build-in module called "events"
// where we can create- , fire- and listen for- our own module



const EventModule = require('events');
const event = new EventModule();

event.on("myName",()=>{
    console.log("My name is Nikhil");
})
// event instance with couple of callbacks()
event.on("myName",()=>{
    console.log("My name is Vinay");
})

event.emit("myName");
// events with callback parameters
event.on("checkPage",(cd,msg)=>{
    console.log(`Status Code: ${cd}, Page: ${msg}`)
})
event.emit("checkPage",200,"ok");