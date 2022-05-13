import express from 'express';
console.log("[OK] express");
import cookieParser from 'cookie-parser';
console.log("[OK] cookie-parser");
import fs from "fs";
console.log("[OK] fs");
import http from "http";
console.log("[OK] http");
import https from "https";
console.log("[OK] https");
function console_ok(msg: string) {
	console.log("\033[1;32m[OK] \033[0m"+msg);
}
function console_error(msg: string) {
	console.log("\033[1;31m[error] \033[0m"+msg);
}
console_ok("log format");
const sslKey  = fs.readFileSync('../ssl/ssl.key', 'utf8');
console_ok("sslKey");
const sslCrt = fs.readFileSync('../ssl/ssl.crt', 'utf8');
console_ok("sslCrt");
const app = express();
console_ok("app");
const credenciais = {key: sslKey, cert: sslCrt};
console_ok("credenciais");
const rootPublicDir = "../../dist/";
console_ok("rootPublicDir");
app.use('/assets', express.static(rootPublicDir+'assets'));
console_ok("assets static");
app.use(cookieParser());
console_ok("use cookieParser");
function getRoute(route: any): any {
    app.get(route, function(req, res) {
		fs.readFile(rootPublicDir+'index.html','utf8', function(err,data){
			res.send(data);
		});
    });
}
function cRouter(): any {
    getRoute("/");
    getRoute("/contato");
    getRoute("/projetos");
    getRoute("/curriculo");
    getRoute("/utilitarios");
    app.use(function(req, res, next) {
        fs.readFile('../errors/404.html','utf8', function(err,data){
            res.status(404).send(data);
        });
    });
    app.use(function(err: any, req: any, res: any, next: any) {
        console.error(err.stack);
        res.status(500).send("500 INTERNAL SERVER ERROR");
    });
}
cRouter();
console_ok("rotas");
const httpServer = http.createServer(app);
const httpsServer = https.createServer(credenciais, app);
httpServer.listen(80,  function () {
	console_ok('express rodando na porta 80 (HTTP)');
});
httpsServer.listen(443, function () {
	console_ok('express rodando na porta 443 (HTTPS)');
});
httpServer.on("error", (e) => {
	console_error("ocorreu um erro na porta 80 (HTTP):\n"+e);
});
httpsServer.on("error", (e) => {
	console_error("ocorreu um erro na porta 443 (HTTPS)):\n"+e);
});