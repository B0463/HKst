var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const concol_1 = __importDefault(require("./concol"));
concol_1.default.console_ok("log format");
const express_1 = __importDefault(require("express"));
concol_1.default.console_ok("express");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
concol_1.default.console_ok("cookie-parser");
const fs_1 = __importDefault(require("fs"));
concol_1.default.console_ok("fs");
const http_1 = __importDefault(require("http"));
concol_1.default.console_ok("http");
const https_1 = __importDefault(require("https"));
concol_1.default.console_ok("https");
const router_1 = require("./router");
concol_1.default.console_ok("router");
const configFile = require("../server_config.json");
concol_1.default.console_ok("config file");
const sslCrt = fs_1.default.readFileSync(configFile.ssl.crt.file, configFile.ssl.crt.encode);
concol_1.default.console_ok("sslCrt");
const sslKey = fs_1.default.readFileSync(configFile.ssl.key.file, configFile.ssl.key.encode);
concol_1.default.console_ok("sslKey");
const app = (0, express_1.default)();
concol_1.default.console_ok("app");
const credenciais = { key: sslKey, cert: sslCrt };
concol_1.default.console_ok("credenciais");
const rootPublicDir = configFile.router.rootDir;
concol_1.default.console_ok("rootPublicDir");
app.use('/assets', express_1.default.static(rootPublicDir + 'assets'));
concol_1.default.console_ok("assets static");
app.use((0, cookie_parser_1.default)());
concol_1.default.console_ok("use cookieParser");
(0, router_1.cRouter)(app, rootPublicDir);
concol_1.default.console_ok("router");
const httpServer = http_1.default.createServer(app);
const httpsServer = https_1.default.createServer(credenciais, app);
httpServer.listen(80, function () {
    concol_1.default.console_ok('express rodando na porta 80 (HTTP)');
});
httpsServer.listen(443, function () {
    concol_1.default.console_ok('express rodando na porta 443 (HTTPS)');
});
httpServer.on("error", (e) => {
    concol_1.default.console_error("ocorreu um erro na porta 80 (HTTP):\n" + e);
});
httpsServer.on("error", (e) => {
    concol_1.default.console_error("ocorreu um erro na porta 443 (HTTPS)):\n" + e);
});
