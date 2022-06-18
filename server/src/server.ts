import concol from "./concol";
concol.console_ok("log format");
import express from 'express';
concol.console_ok("express");
import cookieParser from 'cookie-parser';
concol.console_ok("cookie-parser");
import fs from "fs";
concol.console_ok("fs");
import http from "http";
concol.console_ok("http");
import https from "https";
concol.console_ok("https");
import { cRouter } from './router';
concol.console_ok("router");
const configFile = require("../server_config.json");
concol.console_ok("config file");
const sslCrt = fs.readFileSync(configFile.ssl.crt.file, configFile.ssl.crt.encode);
concol.console_ok("sslCrt");
const sslKey  = fs.readFileSync(configFile.ssl.key.file, configFile.ssl.key.encode);
concol.console_ok("sslKey");
const app = express();
concol.console_ok("app");
const credenciais = {key: sslKey, cert: sslCrt};
concol.console_ok("credenciais");
const rootPublicDir = configFile.router.rootDir;
concol.console_ok("rootPublicDir");
app.use('/assets', express.static(rootPublicDir+'assets'));
concol.console_ok("assets static");
app.use(cookieParser());
concol.console_ok("use cookieParser");
cRouter(app, rootPublicDir);
concol.console_ok("router");
const httpServer = http.createServer(app);
const httpsServer = https.createServer(credenciais, app);
httpServer.listen(80,  function () {
	concol.console_ok('express rodando na porta 80 (HTTP)');
});
httpsServer.listen(443, function () {
	concol.console_ok('express rodando na porta 443 (HTTPS)');
});
httpServer.on("error", (e) => {
	concol.console_error("ocorreu um erro na porta 80 (HTTP):\n"+e);
});
httpsServer.on("error", (e) => {
	concol.console_error("ocorreu um erro na porta 443 (HTTPS)):\n"+e);
});