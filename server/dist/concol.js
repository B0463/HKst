Object.defineProperty(exports, "__esModule", { value: true });
function console_ok(msg) {
    console.log("\033[1;32m[OK] \033[0m" + msg);
}
function console_error(msg) {
    console.log("\033[1;31m[error] \033[0m" + msg);
}
const obj = {
    console_ok,
    console_error
};
exports.default = obj;
