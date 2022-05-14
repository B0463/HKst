const routes = require("../routes.json");
function getRoute(route: any, app: any, fs: any, rootPublicDir: any): any {
    app.get(route, function(req, res) {
		fs.readFile(rootPublicDir+'index.html','utf8', function(err,data){
			res.send(data);
		});
    });
}
function cRouter(app: any, fs: any, rpd: any): any {
    for(let i=0;i<routes.length;i++) {
        getRoute(routes[i], app, fs, rpd);
    }
    app.use(function(req, res, next) {
        fs.readFile('../errors/404.html','utf8', function(err,data){
            res.status(404).send(data);
        });
    });
    app.use(function(err: any, req: any, res: any, next: any) {
        console.error(err.stack);
        res.status(500).send("500 INTERNAL SERVER ERROR");
    });
}
export { cRouter };