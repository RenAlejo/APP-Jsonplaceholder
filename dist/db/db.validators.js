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
exports.isAnExistingRecordId = exports.isValidHttpMethod = void 0;
const http_methods_model_1 = __importDefault(require("../models/http_methods.model"));
const record_model_1 = __importDefault(require("../models/record.model"));
const isValidHttpMethod = (method = '') => __awaiter(void 0, void 0, void 0, function* () {
    const methodExist = yield http_methods_model_1.default.findOne({ method });
    if (!methodExist) {
        throw new Error(`El método ${method} no es un método HTTP válido.`);
    }
});
exports.isValidHttpMethod = isValidHttpMethod;
const isAnExistingRecordId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const recordExist = yield record_model_1.default.findById(id);
    if (!recordExist) {
        throw new Error(`El registro con id: ${id} no existe en la base de datos.`);
    }
});
exports.isAnExistingRecordId = isAnExistingRecordId;
//# sourceMappingURL=db.validators.js.map