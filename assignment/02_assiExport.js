"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.funname = exports.export2 = exports.exportFun = void 0;
function exportFun(id, name) {
    console.log('Use of export import module');
    console.log("id: ".concat(id, ", Name: ").concat(name));
}
exports.exportFun = exportFun;
function export2(no) {
    console.log(no);
}
exports.export2 = export2;
function funname() {
    console.log('this is the export module');
}
exports.funname = funname;
