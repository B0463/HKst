Object.defineProperty(exports, "__esModule", { value: true });
function calc(r) {
    return (r * 2) * Math.PI;
}
function init(app) {
    app.post("/api/circCalc", (req, res) => {
        const heads = req.headers;
        const r = heads.r;
        if (r == undefined) {
            const res2 = res;
            res2.status(400).send("r undefined");
            return 0;
        }
        let rNumbertmp;
        try {
            rNumbertmp = parseInt(r);
        }
        catch (_a) {
            const res2 = res;
            res2.status(400).send("r is not a number");
            return 0;
        }
        const rNumber = rNumbertmp;
        const res2 = res;
        res2.status(200).send(calc(rNumber).toString());
    });
}
const obj = {
    init
};
exports.default = obj;
