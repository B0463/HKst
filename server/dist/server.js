var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
console.log("[OK] express");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
console.log("[OK] cookie-parser");
const fs_1 = __importDefault(require("fs"));
console.log("[OK] fs");
const http_1 = __importDefault(require("http"));
console.log("[OK] http");
const https_1 = __importDefault(require("https"));
console.log("[OK] https");
const router_1 = require("./router");
console.log("[OK] router");
function console_ok(msg) {
    console.log("\033[1;32m[OK] \033[0m" + msg);
}
function console_error(msg) {
    console.log("\033[1;31m[error] \033[0m" + msg);
}
console_ok("log format");
const sslCrt = fs_1.default.readFileSync('../ssl/ssl.crt', 'utf8');
console_ok("sslCrt");
const sslKey = fs_1.default.readFileSync('../ssl/ssl.key', 'utf8');
console_ok("sslKey");
const app = (0, express_1.default)();
console_ok("app");
const credenciais = { key: sslKey, cert: sslCrt };
console_ok("credenciais");
const rootPublicDir = "../../dist/";
console_ok("rootPublicDir");
app.use('/assets', express_1.default.static(rootPublicDir + 'assets'));
console_ok("assets static");
app.use((0, cookie_parser_1.default)());
console_ok("use cookieParser");
(0, router_1.cRouter)(app, rootPublicDir);
console_ok("router");
const httpServer = http_1.default.createServer(app);
const httpsServer = https_1.default.createServer(credenciais, app);
httpServer.listen(80, function () {
    console_ok('express rodando na porta 80 (HTTP)');
});
httpsServer.listen(443, function () {
    console_ok('express rodando na porta 443 (HTTPS)');
});
httpServer.on("error", (e) => {
    console_error("ocorreu um erro na porta 80 (HTTP):\n" + e);
});
httpsServer.on("error", (e) => {
    console_error("ocorreu um erro na porta 443 (HTTPS)):\n" + e);
});
