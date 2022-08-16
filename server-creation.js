const http=require('http')
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('this is our home page')
    }
    if(req.url === '/about'){
       res.end('this is about page') 
    }
    
    res.end('error 404 page not found')
   
})
server.listen(8000, ()=>{
    console.log('server is listening on port 8000 ...')
})
module.exports.server=server