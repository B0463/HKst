Object.defineProperty(exports, "__esModule", { value: true });
exports.cRouter = void 0;
const routes = require("../routes.json");
function getRoute(route, app, fs, rootPublicDir) {
    app.get(route, function (req, res) {
        fs.readFile(rootPublicDir + 'index.html', 'utf8', function (err, data) {
            res.send(data);
        });
    });
}
function cRouter(app, fs, rpd) {
    for (let i = 0; i < routes.length; i++) {
        getRoute(routes[i], app, fs, rpd);
    }
    app.use(function (req, res, next) {
        fs.readFile('../errors/404.html', 'utf8', function (err, data) {
            res.status(404).send(data);
        });
    });
    app.use(function (err, req, res, next) {
        console.error(err.stack);
        res.status(500).send("500 INTERNAL SERVER ERROR");
    });
}
exports.cRouter = cRouter;
