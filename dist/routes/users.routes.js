"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const user_controller_1 = require("../controllers/user.controller");
const userRouter = (0, express_1.Router)();
const record_validator_1 = __importDefault(require("../middlewares/record.validator"));
userRouter.get('/', user_controller_1.getUsers);
userRouter.get('/:id', [
    (0, express_validator_1.check)('id', 'El id ingresado no es un id válido').isNumeric(),
    record_validator_1.default
], user_controller_1.getSingleUser);
userRouter.get('/photo/:id', [
    (0, express_validator_1.check)('id', 'El id ingresado no es un id válido').isNumeric(),
    record_validator_1.default
], user_controller_1.getUserPhotos);
userRouter.get('/posts/:id', [
    (0, express_validator_1.check)('id', 'El id ingresado no es un id válido').isNumeric(),
    record_validator_1.default
], user_controller_1.getUserPosts);
exports.default = userRouter;
//# sourceMappingURL=users.routes.js.map