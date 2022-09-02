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
// const readfilePromise=util.promisify (readFile)     

const start=async()=>{
    try {
        const first=await getText('./content/first.txt');
        //const first=await redfilePromise('./content/first.txt');
        console.log(first)
    } catch (error) {
        console.log(error)
    }
   
}
start()