const c1=require("express");
const c2=require("http");
const c3=require("https");
const c4=require("fs");
const c5=c1();
c5.use('/',c1.static('./'));
const c6=c2.createServer(c5);
const c7=c3.createServer({key:c4.readFileSync('./ssl/ssl.key','utf8'),cert:c4.readFileSync('./ssl/ssl.crt','utf8')},c5);
c6.listen(80,()=>{console.log("80 ok");});
c7.listen(443,()=>{console.log("443 ok");});