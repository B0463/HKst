const routes = require("../server_config.json").router.routes;
import api from "./api/api";
import fs from "fs";
function getRoute(route: any, app: any, rootPublicDir: any): any {
    app.get(route, function(req, res) {
		fs.readFile(rootPublicDir+'index.html','utf8', function(err,data){
			res.send(data);
		});
    });
}
function cRouterAPI(app: any): any {
    api.createAPI(app);
}
function cRouter(app: any, rpd: any): any {
    cRouterAPI(app);
    for(let i=0;i<routes.length;i++) {
        getRoute(routes[i], app, rpd);
    }
    app.use(function(req, res, next) {
        fs.readFile(rpd+'index.html','utf8', function(err,data){
			res.send(data);
		});
    });
    app.use(function(err: any, req: any, res: any, next: any) {
        console.error(err.stack);
        res.status(500).send("500 INTERNAL SERVER ERROR");
    });
}
export { cRouter };