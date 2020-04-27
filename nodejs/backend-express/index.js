const express =require ( 'express');
const port =6677;
const app =express();
let adminroute= require('./admin');
app.use('/admin',adminroute);
app.use(  express.static('new folder'));

app.get("/",(req,res)=>
{
    res.send("my default api");

})
app.get("/asr",(req,res)=>
{
    res.send("asr");

})//json file 
app.get("/json",(req,res)=>
{
    res.json({'err':0,'message':"sweet"});

})
//url segment req with params object
app.get("/pro/:cn",(req,res)=>
{
    let cname=req.params.cn;
    res.send(cname);

})
app.listen( port,()=>{
    console.log('serve work on${port}');
})