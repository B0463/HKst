import express from "express";
function calc(r: number): Number {
    return (r*2)*Math.PI;
}
function init(app: any): any {
    app.post("/api/circCalc", (req: Request, res: Response) => {
        const heads: any = req.headers;
        const r = heads.r;
        if(r == undefined) {
            const res2:any = res;
            res2.status(400).send("r undefined");
            return 0;
        }
        let rNumbertmp;
        try {
            rNumbertmp = parseInt(r);
        }
        catch {
            const res2:any = res;
            res2.status(400).send("r is not a number");
            return 0;
        }
        const rNumber = rNumbertmp;
        const res2:any = res;
        res2.status(200).send(calc(rNumber).toString());
    });
}

const obj = {
    init
}
export default obj;