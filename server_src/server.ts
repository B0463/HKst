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
app.use('/assets', express.static('../assets'));
console_ok("assets static");
app.use(cookieParser());
console_ok("use cookieParser");
app.get('/', function(req, res) {
	fs.readFile('../index.html','utf8', function(err,data){
		res.send(data);
	});
});
app.get('/contato', function(req, res) {
	fs.readFile('../contato/index.html','utf8', function(err, data){
		res.send(data);
	});
});
app.get('/curriculo', function(req, res) {
	fs.readFile('../curriculo/index.html','utf8', function(err,data){
		res.send(data);
	});
});
app.get('/projetos', function(req, res) {
	fs.readFile('../projetos/index.html','utf8', function(err,data){
		res.send(data);
	});
});
app.get('/projetos/Bot_0463', function(req, res) {
	fs.readFile('../projetos/Bot_0463/index.html','utf8', function(err,data){
		res.send(data);
	});
});
app.get('/projetos/TickTackToe_CLI_C', function(req, res) {
	fs.readFile('../projetos/TickTackToe_CLI_C/index.html','utf8', function(err,data){
		res.send(data);
	});
});
app.get('/projetos/TickTackToe_CLI_CPP', function(req, res) {
	fs.readFile('../projetos/TickTackToe_CLI_CPP/index.html','utf8', function(err,data){
		res.send(data);
	});
});
app.get('/projetos/calc_html-css', function(req, res) {
	fs.readFile('../projetos/calc_html-css/index.html','utf8', function(err,data){
		res.send(data);
	});
});
app.get('/projetos/IRC_server', function(req, res) {
	fs.readFile('../projetos/IRC_server/index.html','utf8', function(err,data){
		res.send(data);
	});
});
app.get('/projetos/MondOS', function(req, res) {
	fs.readFile('../projetos/MondOS/index.html','utf8', function(err,data){
		res.send(data);
	});
});
app.get('/projetos/telnet-chat', function(req, res) {
	fs.readFile('../projetos/telnet-chat/index.html','utf8', function(err,data){
		res.send(data);
	});
});
app.get('/utilitarios', function(req, res) {
	fs.readFile('../utilitarios/index.html','utf8', function(err,data){
		res.send(data);
	});
});
app.get('/utilitarios/calculadora_de_hipotenusa', function(req, res) {
	fs.readFile('../utilitarios/calculadora_de_hipotenusa/index.html','utf8', function(err,data){
		res.send(data);
	});
});
app.get('/utilitarios/teste_de_temperamento', function(req, res) {
	fs.readFile('../utilitarios/teste_de_temperamento/index.html','utf8', function(err,data){
		res.send(data);
	});
});
app.get('/utilitarios/validador_de_cpf', function(req, res) {
	fs.readFile('../utilitarios/validador_de_cpf/index.html','utf8', function(err,data){
		res.send(data);
	});
});
app.get("/teapot/coffe", function(req, res) {
    fs.readFile('../errors/418.html','utf8', function(err,data){
        res.status(200).send(data);
    });
});
app.post("/teapot/coffe", function(req, res) {
    res.status(418).send("não posso fazer café no bule de chá, desculpe.");
});
console_ok("rotas");
app.use(function(req, res, next) {
	fs.readFile('../errors/404.html','utf8', function(err,data){
        res.status(404).send(data);
    });
});
app.use(function(err: any, req: any, res: any, next: any) {
	console.error(err.stack);
	res.status(500).send("500 INTERNAL SERVER ERROR");
});
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