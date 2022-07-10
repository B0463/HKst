var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FarbeLog_1 = __importDefault(require("./FarbeLog"));
FarbeLog_1.default.ok.noWithHour("import", "FargeLog");
const express_1 = __importDefault(require("express"));
FarbeLog_1.default.ok.noWithHour("import", "express");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
FarbeLog_1.default.ok.noWithHour("import", "cookie-parser");
const fs_1 = __importDefault(require("fs"));
FarbeLog_1.default.ok.noWithHour("import", "fs");
const http_1 = __importDefault(require("http"));
FarbeLog_1.default.ok.noWithHour("import", "http");
const https_1 = __importDefault(require("https"));
FarbeLog_1.default.ok.noWithHour("import", "https");
const router_1 = require("./router");
FarbeLog_1.default.ok.noWithHour("import", "router");
const configFile = require("../server_config.json");
FarbeLog_1.default.ok.noWithHour("import", "configFile");
const sslCrt = fs_1.default.readFileSync(configFile.ssl.crt.file, configFile.ssl.crt.encode);
FarbeLog_1.default.ok.noWithHour("define", "ssl crt");
const sslKey = fs_1.default.readFileSync(configFile.ssl.key.file, configFile.ssl.key.encode);
FarbeLog_1.default.ok.noWithHour("define", "ssl key");
const app = (0, express_1.default)();
FarbeLog_1.default.ok.noWithHour("define", "app");
const credenciais = { key: sslKey, cert: sslCrt };
FarbeLog_1.default.ok.noWithHour("define", "ssl credencials");
const rootPublicDir = configFile.router.rootDir;
FarbeLog_1.default.ok.noWithHour("define", "root public diretory");
app.use('/assets', express_1.default.static(rootPublicDir + 'assets'));
FarbeLog_1.default.ok.noWithHour("use", "assets");
app.use((0, cookie_parser_1.default)());
FarbeLog_1.default.ok.noWithHour("use", "cookie-parser");
(0, router_1.cRouter)(app, rootPublicDir);
FarbeLog_1.default.ok.noWithHour("create", "router");
const httpServer = http_1.default.createServer(app);
const httpsServer = https_1.default.createServer(credenciais, app);
httpServer.listen(80, function () {
    FarbeLog_1.default.ok.noWithHour("listen", "express running in port 80 (HTTP)");
});
httpsServer.listen(443, function () {
    FarbeLog_1.default.ok.noWithHour("listen", "express running in port 443 (HTTPS)");
});
httpServer.on("error", (e) => {
    FarbeLog_1.default.error.noWithHour("listen", "error in port 80 (HTTP)");
});
httpsServer.on("error", (e) => {
    FarbeLog_1.default.error.noWithHour("listen", "error in port 443 (HTTPS)");
});
