"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserPosts = exports.getUserPhotos = exports.getSingleUser = exports.getUsers = void 0;
const HttpService_1 = __importDefault(require("../helpers/HttpService"));
const moment_1 = __importDefault(require("moment"));
const http = new HttpService_1.default();
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield http.get(process.env.API_JPH_URL + '/users').then(users => users);
    if (!users) {
        return res.status(404).json({
            msg: "No se encontrarón usuarios"
        });
    }
    yield http.post(process.env.API_URL, {
        "date": (0, moment_1.default)().format(),
        "method": req.method,
        "response": users
    });
    res.status(200).json({
        users
    });
});
exports.getUsers = getUsers;
const getSingleUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const users = yield http.get(process.env.API_JPH_URL + '/users').then(users => users);
    if (!users) {
        return res.status(404).json({
            msg: "No se encontrarón usuarios"
        });
    }
    const user = users.find(user => {
        if (user.id == Number(id)) {
            return user;
        }
    });
    if (!user) {
        return res.status(404).json({
            msg: `El usuario con id ${id} no existe en la base de datos`
        });
    }
    yield http.post(process.env.API_URL, {
        "date": (0, moment_1.default)().format(),
        "method": req.method,
        "response": user
    });
    res.status(200).json({
        user
    });
});
exports.getSingleUser = getSingleUser;
const getUserPhotos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const albums = yield http.get(process.env.API_JPH_URL + '/albums').then(albums => albums);
    if (!albums) {
        return res.status(404).json({
            msg: "No se encontrarón álbumes"
        });
    }
    const photos = albums.filter(photos => {
        if (photos.userId == Number(id)) {
            return photos;
        }
    });
    if (photos.length === 0) {
        return res.status(404).json({
            msg: `No se encontraron fotos`
        });
    }
    yield http.post(process.env.API_URL, {
        "date": (0, moment_1.default)().format(),
        "method": req.method,
        "response": photos
    });
    res.status(200).json({
        photos
    });
});
exports.getUserPhotos = getUserPhotos;
const getUserPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const posts = yield http.get(process.env.API_JPH_URL + '/posts').then(posts => posts);
    if (!posts) {
        return res.status(404).json({
            msg: "No se encontrarón publicaciones"
        });
    }
    const post = posts.filter(post => {
        if (post.userId == Number(id)) {
            return post;
        }
    });
    if (post.length === 0) {
        return res.status(404).json({
            msg: `No se encontraron publicaciones`
        });
    }
    yield http.post(process.env.API_URL, {
        "date": (0, moment_1.default)().format(),
        "method": req.method,
        "response": post
    });
    res.status(200).json({
        post
    });
});
exports.getUserPosts = getUserPosts;
//# sourceMappingURL=user.controller.js.map