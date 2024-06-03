"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthCredentialsValidator = void 0;
var zod_1 = require("zod");
exports.AuthCredentialsValidator = zod_1.z.object({
    email: zod_1.z.string().email("E-mail inválido"),
    password: zod_1.z
        .string()
        .min(6, { message: "A senha deve ter no mínimo 6 caracteres" }),
});
