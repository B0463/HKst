var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hipoCalc_1 = __importDefault(require("./utils/hipoCalc"));
const circCalc_1 = __importDefault(require("./utils/circCalc"));
const cpfVerf_1 = __importDefault(require("./utils/cpfVerf"));
function createAPI(app) {
    hipoCalc_1.default.init(app);
    circCalc_1.default.init(app);
    cpfVerf_1.default.init(app);
}
const obj = {
    createAPI
};
exports.default = obj;
