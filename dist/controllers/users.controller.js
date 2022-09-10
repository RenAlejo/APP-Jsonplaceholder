"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserPosts = exports.getUserPhoto = exports.getSingleUser = exports.getUsers = void 0;
const getUsers = (req, res) => {
    res.json({
        msg: 'getUser'
    });
};
exports.getUsers = getUsers;
const getSingleUser = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'getSingleUser',
        id
    });
};
exports.getSingleUser = getSingleUser;
const getUserPhoto = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'getUserById',
        id
    });
};
exports.getUserPhoto = getUserPhoto;
const getUserPosts = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'getUserById',
        id
    });
};
exports.getUserPosts = getUserPosts;
//# sourceMappingURL=users.controller.js.map