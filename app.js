/*const path=require('path');
console.log('this is path.sep='+ path.sep)
const pathObj=path.parse(__filename);
const loc=require('./logger');
const names=require('./3-names');
console.log(names);
loc(names.male) ;
loc(names.female) ;
*
const ser=require('./server-creation')
const { readFileSync, writeFileSync } = require("fs");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");
//console.log(first, second);
writeFileSync(
  "./content/result-syncro.txt",
  `here is the result of grap the dirst ans tbe second text :${first},${second}`,
  {flag:'a'}
);
ser*/
const {readFile}=require('fs')

const getText = (path)=>{
    return new Promise((resolve, reject) => {
        readFile(path,'utf8',(err,data)=>{
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
  
}

const start=async()=>{
    try {
        const first=await getText('./first.txt');
        console.log(first)
    } catch (error) {
        console.log(error)
    }
   
}
