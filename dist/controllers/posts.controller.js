"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPosts = void 0;
const getPosts = (req, res) => {
    const { id } = req.params;
    res.status(200).json({
        msg: 'getPost',
        id
    });
};
exports.getPosts = getPosts;
//# sourceMappingURL=posts.controller.js.map