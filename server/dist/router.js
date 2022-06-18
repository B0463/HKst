var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cRouter = void 0;
const routes = require("../server_config.json").router.routes;
const api_1 = __importDefault(require("./api/api"));
const fs_1 = __importDefault(require("fs"));
function getRoute(route, app, rootPublicDir) {
    app.get(route, function (req, res) {
        fs_1.default.readFile(rootPublicDir + 'index.html', 'utf8', function (err, data) {
            res.send(data);
        });
    });
}
function cRouterAPI(app) {
    api_1.default.createAPI(app);
}
function cRouter(app, rpd) {
    cRouterAPI(app);
    for (let i = 0; i < routes.length; i++) {
        getRoute(routes[i], app, rpd);
    }
    app.use(function (req, res, next) {
        fs_1.default.readFile(rpd + 'index.html', 'utf8', function (err, data) {
            res.send(data);
        });
    });
    app.use(function (err, req, res, next) {
        console.error(err.stack);
        res.status(500).send("500 INTERNAL SERVER ERROR");
    });
}
exports.cRouter = cRouter;
