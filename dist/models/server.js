"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const records_routes_1 = __importDefault(require("../routes/records.routes"));
const users_routes_1 = __importDefault(require("../routes/users.routes"));
const cors_1 = __importDefault(require("cors"));
const db_config_1 = __importDefault(require("../db/db.config"));
const safe_1 = __importDefault(require("colors/safe"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swaggerDocument = __importStar(require("./../swagger.json"));
class Server {
    constructor() {
        this._paths = {
            users: '/api/users',
            records: '/api/records',
            swagger: '/api/swagger',
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
        this._app.use(this._paths.records, records_routes_1.default);
        this._app.use(this._paths.swagger, swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocument));
    }
    listen() {
        this._app.listen(this._port, () => {
            console.log(safe_1.default.bgMagenta('Server listening on port: ' + this._port));
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map