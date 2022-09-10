"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const posts_routes_1 = __importDefault(require("../routes/posts.routes"));
const records_routes_1 = __importDefault(require("../routes/records.routes"));
const users_routes_1 = __importDefault(require("../routes/users.routes"));
class Server {
    constructor() {
        this._paths = {
            users: '/api/users',
            posts: '/api/posts',
            records: '/api/records',
        };
        this._app = (0, express_1.default)();
        this._port = process.env.PORT || '8080';
        this.routes();
    }
    routes() {
        this._app.use(this._paths.users, users_routes_1.default);
        this._app.use(this._paths.posts, posts_routes_1.default);
        this._app.use(this._paths.records, records_routes_1.default);
    }
    listen() {
        this._app.listen(this._port, () => {
            console.log('Server listening on port: ' + this._port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map