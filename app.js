/*const path=require('path');
console.log('this is path.sep='+ path.sep)
const pathObj=path.parse(__filename);
const loc=require('./logger');
const names=require('./3-names');
console.log(names);
loc(names.male) ;
loc(names.female) ;

const ser=require('./server-creation')
const { readFileSync, writeFileSync } = require("fs");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");
console.log(first, second);
writeFileSync(
  "./content/result-syncro.txt",
  `here is the result of grap the dirst ans tbe second text :${first},${second}`,
  {flag:'a'}
);
*/
const http=require('http')
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('this is our home page')
    }
    if(req.url === '/about'){
       res.end('this is about page') 
    }
    res.end('error 404 page not found')
    server.listen(8000,()=>{
        console.log('server is listening on port 8000')
    })
})