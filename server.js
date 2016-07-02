var os=require('os');
var app=require('express')()

var requestIp = require('request-ip');




var port= process.env.PORT||3000;

app.listen(port);
app.use(requestIp.mw())

app.route('/').get(function(req,res){
   var ip = req.clientIp, 
     lang=req.headers["accept-language"].split(',')[0],
     system=os.type().replace('_'," ")+' '+os.release()+'; '+os.platform()+'; '+os.arch()+";"
   
   
   
   res.json({ip:ip,language:lang,software:system})

})