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
import { cRouter } from './router';
console.log("[OK] router");
function console_ok(msg: string) {
	console.log("\033[1;32m[OK] \033[0m"+msg);
}
function console_error(msg: string) {
	console.log("\033[1;31m[error] \033[0m"+msg);
}
console_ok("log format");
const sslCrt = fs.readFileSync('../ssl/ssl.crt', 'utf8');
console_ok("sslCrt");
const sslKey  = fs.readFileSync('../ssl/ssl.key', 'utf8');
console_ok("sslKey");
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
cRouter(app, fs, rootPublicDir);
console_ok("router");
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