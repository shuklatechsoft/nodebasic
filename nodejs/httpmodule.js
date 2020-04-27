let http= require(
    "http"
);
let port=5566;
const server = http.createServer(function(req,res){
  if(req.url==('/')){
      res.end("homepage");
  }

})
server.listen(port,()=>
{
    console.log(" Server runing on $(port)");
})