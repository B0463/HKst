import FarbeLog from "./FarbeLog";
FarbeLog.ok.noWithHour("import", "FargeLog");
import express from 'express';
FarbeLog.ok.noWithHour("import", "express");
import cookieParser from 'cookie-parser';
FarbeLog.ok.noWithHour("import", "cookie-parser");
import fs from "fs";
FarbeLog.ok.noWithHour("import", "fs");
import http from "http";
FarbeLog.ok.noWithHour("import", "http");
import https from "https";
FarbeLog.ok.noWithHour("import", "https");
import { cRouter } from './router';
FarbeLog.ok.noWithHour("import", "router");
const configFile = require("../server_config.json");
FarbeLog.ok.noWithHour("import", "configFile");
const sslCrt = fs.readFileSync(configFile.ssl.crt.file, configFile.ssl.crt.encode);
FarbeLog.ok.noWithHour("define", "ssl crt");
const sslKey  = fs.readFileSync(configFile.ssl.key.file, configFile.ssl.key.encode);
FarbeLog.ok.noWithHour("define", "ssl key");
const app = express();
FarbeLog.ok.noWithHour("define", "app");
const credenciais = {key: sslKey, cert: sslCrt};
FarbeLog.ok.noWithHour("define", "ssl credencials");
const rootPublicDir = configFile.router.rootDir;
FarbeLog.ok.noWithHour("define", "root public diretory");
app.use('/assets', express.static(rootPublicDir+'assets'));
FarbeLog.ok.noWithHour("use", "assets");
app.use(cookieParser());
FarbeLog.ok.noWithHour("use", "cookie-parser");
cRouter(app, rootPublicDir);
FarbeLog.ok.noWithHour("create", "router");
const httpServer = http.createServer(app);
const httpsServer = https.createServer(credenciais, app);
httpServer.listen(80,  function () {
	FarbeLog.ok.noWithHour("listen", "express running in port 80 (HTTP)");
});
httpsServer.listen(443, function () {
	FarbeLog.ok.noWithHour("listen", "express running in port 443 (HTTPS)");
});
httpServer.on("error", (e) => {
	FarbeLog.error.noWithHour("listen", "error in port 80 (HTTP)");
});
httpsServer.on("error", (e) => {
	FarbeLog.error.noWithHour("listen", "error in port 443 (HTTPS)");
});