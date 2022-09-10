"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controller_1 = require("../controllers/users.controller");
const userRouter = (0, express_1.Router)();
userRouter.get('/', users_controller_1.getUsers);
userRouter.get('/:id', users_controller_1.getSingleUser);
userRouter.get('/photo/:id', users_controller_1.getUserPhoto);
userRouter.get('/posts/:id', users_controller_1.getUserPosts);
exports.default = userRouter;
//# sourceMappingURL=users.routes.js.map