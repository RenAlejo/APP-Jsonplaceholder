"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const posts_controller_1 = require("../controllers/posts.controller");
const postRoutes = (0, express_1.Router)();
postRoutes.get('/', posts_controller_1.getPosts);
exports.default = postRoutes;
//# sourceMappingURL=posts.routes.js.map