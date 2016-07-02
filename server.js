var app=require('express')()
var requestIp = require('request-ip');


var port= process.env.PORT||3000;

app.listen(port);
app.use(requestIp.mw())

app.get('/',function(req,res){
     language=req.headers["accept-language"].split(',')[0],
     software=req.headers["user-agent"].split("(")[1].split(")")[0];
   
   res.json({ip:req.clientIp, language, software})

})
