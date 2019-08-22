let express = require('express')
let server = express()
let path=require('path')
server.get('/add', (req, res) => 
{
    let n1=parseInt(req.query.num1);
    let n2=parseInt(req.query.num2);
    let result=n1+n2;
    res.send('Addition:'+result);
});
server.get('/home',(req,res)=>{res.sendFile(path.join(__dirname,'home.html'))})
server.get('/name',(req,res)=>{res.send('Hello '+req.query.t1)})

server.listen(3000);
console.log("Server is ready");
