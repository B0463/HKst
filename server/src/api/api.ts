import hipoCalc from "./utils/hipoCalc";
import circCalc from "./utils/circCalc";
import cpfVerf from "./utils/cpfVerf";

function createAPI(app: any): any {
    hipoCalc.init(app);
    circCalc.init(app);
    cpfVerf.init(app);
}

const obj = {
    createAPI
}
export default obj;