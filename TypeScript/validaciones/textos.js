"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerError = exports.MENSAJES = void 0;
exports.MENSAJES = [
    'El texto es muy corto',
    'El texto es muy largo1'
];
function obtenerError(numError) {
    return exports.MENSAJES[numError];
}
exports.obtenerError = obtenerError;
;
