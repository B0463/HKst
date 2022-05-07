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
function console_ok(msg) {
    console.log("\033[1;32m[OK] \033[0m" + msg);
}
function console_error(msg) {
    console.log("\033[1;31m[error] \033[0m" + msg);
}
console_ok("log format");
const sslKey = fs_1.default.readFileSync('../ssl/ssl.key', 'utf8');
console_ok("sslKey");
const sslCrt = fs_1.default.readFileSync('../ssl/ssl.crt', 'utf8');
console_ok("sslCrt");
const app = (0, express_1.default)();
console_ok("app");
const credenciais = { key: sslKey, cert: sslCrt };
console_ok("credenciais");
app.use('/assets', express_1.default.static('../assets'));
console_ok("assets static");
app.use((0, cookie_parser_1.default)());
console_ok("use cookieParser");
app.get('/', function (req, res) {
    fs_1.default.readFile('../index.html', 'utf8', function (err, data) {
        res.send(data);
    });
});
app.get('/contato', function (req, res) {
    fs_1.default.readFile('../contato/index.html', 'utf8', function (err, data) {
        res.send(data);
    });
});
app.get('/curriculo', function (req, res) {
    fs_1.default.readFile('../curriculo/index.html', 'utf8', function (err, data) {
        res.send(data);
    });
});
app.get('/projetos', function (req, res) {
    fs_1.default.readFile('../projetos/index.html', 'utf8', function (err, data) {
        res.send(data);
    });
});
app.get('/projetos/Bot_0463', function (req, res) {
    fs_1.default.readFile('../projetos/Bot_0463/index.html', 'utf8', function (err, data) {
        res.send(data);
    });
});
app.get('/projetos/TickTackToe_CLI_C', function (req, res) {
    fs_1.default.readFile('../projetos/TickTackToe_CLI_C/index.html', 'utf8', function (err, data) {
        res.send(data);
    });
});
app.get('/projetos/calc_html-css', function (req, res) {
    fs_1.default.readFile('../projetos/calc_html-css/index.html', 'utf8', function (err, data) {
        res.send(data);
    });
});
app.get('/utilitarios', function (req, res) {
    fs_1.default.readFile('../utilitarios/index.html', 'utf8', function (err, data) {
        res.send(data);
    });
});
app.get('/utilitarios/calculadora_de_hipotenusa', function (req, res) {
    fs_1.default.readFile('../utilitarios/calculadora_de_hipotenusa/index.html', 'utf8', function (err, data) {
        res.send(data);
    });
});
app.get('/utilitarios/teste_de_temperamento', function (req, res) {
    fs_1.default.readFile('../utilitarios/teste_de_temperamento/index.html', 'utf8', function (err, data) {
        res.send(data);
    });
});
app.get('/utilitarios/validador_de_cpf', function (req, res) {
    fs_1.default.readFile('../utilitarios/validador_de_cpf/index.html', 'utf8', function (err, data) {
        res.send(data);
    });
});
app.get("/teapot/coffe", function (req, res) {
    fs_1.default.readFile('../errors/418.html', 'utf8', function (err, data) {
        res.status(200).send(data);
    });
});
app.post("/teapot/coffe", function (req, res) {
    res.status(418).send("não posso fazer café no bule de chá, desculpe.");
});
console_ok("rotas");
app.use(function (req, res, next) {
    fs_1.default.readFile('../errors/404.html', 'utf8', function (err, data) {
        res.status(404).send(data);
    });
});
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send("500 INTERNAL SERVER ERROR");
});
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
