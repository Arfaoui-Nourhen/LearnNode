/*const path=require('path');
console.log('this is path.sep='+ path.sep)
const pathObj=path.parse(__filename);
const loc=require('./logger');
const names=require('./3-names');
console.log(names);
loc(names.male) ;
loc(names.female) ;
*/
/*const ser=require('./server-creation')
const { readFileSync, writeFileSync } = require("fs");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");
//console.log(first, second);
/*writeFileSync(
  "./content/result-syncro.txt",
  `here is the result of grap the dirst ans tbe second text :${first},${second}`,
  {flag:'a'}
);
ser*/   
 const EventEmitter=require('events')

const firstMethodEmitter= new EventEmitter()

firstMethodEmitter.on('eventname',(name,id)=>{
    console.log(`data recieved , the name:${name} the id : ${id}`)
})
 firstMethodEmitter.emit('eventname','katalina',2)
//--------create server-- access to event --- listen it-----------/
 const http=require('http')
 const secondMethodEmitter= new EventEmitter()
 const server2=http.createServer()
 server2.on('request',(req,res)=>{
    res.end("welcome -~~-")
 })
 server2.listen(5000, ()=>{
    console.log('server is listening on port 5000 ...')
})
