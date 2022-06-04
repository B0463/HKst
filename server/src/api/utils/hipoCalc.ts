import express from "express";
function calc(co: number, ca: number): Number {
    return Math.sqrt(Math.pow(co, 2)+Math.pow(ca, 2));
}
function init(app: any): any {
    app.post("/api/hipoCalc", (req: Request, res: Response) => {
        const heads: any = req.headers;
        const co = heads.co;
        const ca = heads.ca;
        if(co == undefined) {
            const res2:any = res;
            res2.status(400).send("co undefined");
            return 0;
        }
        if(ca == undefined) {
            const res2:any = res;
            res2.status(400).send("ca undefined");
            return 0;
        }
        let coNumbertmp;
        let caNumbertmp;
        try {
            coNumbertmp = parseInt(co);
        }
        catch {
            const res2:any = res;
            res2.status(400).send("co is not a number");
            return 0;
        }
        try {
            caNumbertmp = parseInt(ca);
        }
        catch {
            const res2:any = res;
            res2.status(400).send("ca is not a number");
            return 0;
        }
        const coNumber = coNumbertmp;
        const caNumber = caNumbertmp;
        const res2:any = res;
        res2.status(200).send(calc(coNumber, caNumber).toString());
    });
}

const obj = {
    init
}
export default obj;