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
const express_1 = __importDefault(require("express"));
const posts_routes_1 = __importDefault(require("../routes/posts.routes"));
const records_routes_1 = __importDefault(require("../routes/records.routes"));
const users_routes_1 = __importDefault(require("../routes/users.routes"));
const cors_1 = __importDefault(require("cors"));
const db_config_1 = __importDefault(require("../db/db.config"));
class Server {
    constructor() {
        this._paths = {
            users: '/api/users',
            posts: '/api/posts',
            records: '/api/records',
        };
        this._app = (0, express_1.default)();
        this._port = process.env.PORT || '8080';
        // CONEXION A BASE DE DATOS
        this.database();
        // MIDDLEWARES DE LA APLICACIÓN
        this.middleWares();
        // RUTAS DE LA APLICACIÓN
        this.routes();
    }
    database() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, db_config_1.default)();
        });
    }
    middleWares() {
        this._app.use((0, cors_1.default)({}));
        this._app.use(express_1.default.json());
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