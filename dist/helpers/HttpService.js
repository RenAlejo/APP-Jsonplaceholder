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
const axios_1 = __importDefault(require("axios"));
class HttpService {
    constructor() {
        this.http = axios_1.default;
    }
    get(api_url) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.http.get(api_url)
                .then(({ data }) => data)
                .catch((err) => err);
        });
    }
    post(api_url, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.http.post(api_url, body)
                .then(({ data }) => data)
                .catch((err) => err);
        });
    }
}
exports.default = HttpService;
//# sourceMappingURL=HttpService.js.map