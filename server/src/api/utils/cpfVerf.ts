import express from "express";
function calc(strCPF: string): boolean {
    let Soma: number;
    let Resto: number;
    Soma = 0;
    if(strCPF == "00000000000") return false;
    for(let i=1; i<=9; i++) {
        Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
    }
    Resto = (Soma * 10) % 11;
    if((Resto == 10) || (Resto == 11)) Resto = 0;
    if(Resto != parseInt(strCPF.substring(9, 10))) return false;
    Soma = 0;
    for(let i = 1; i <= 10; i++) {
        Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    }
    Resto = (Soma * 10) % 11;
    if((Resto == 10) || (Resto == 11)) Resto = 0;
    if(Resto != parseInt(strCPF.substring(10, 11))) return false;
    return true;
}
function init(app: any): any {
    app.post("/api/cpfVerf", (req: Request, res: Response) => {
        const heads: any = req.headers;
        const cpf: string = heads.cpf;
        if(cpf == undefined) {
            const res2:any = res;
            res2.status(400).send("cpf undefined");
            return 0;
        }
        try {
            parseInt(cpf);
        }
        catch {
            const res2:any = res;
            res2.status(400).send("cpf is not a number");
            return 0;
        }
        if(cpf.length != 11) {
            const res2:any = res;
            res2.status(400).send("invalid cpf");
            return 0;
        }
        const res2:any = res;
        res2.status(200).send(calc(cpf).toString());
    });
}

const obj = {
    init
}
export default obj;