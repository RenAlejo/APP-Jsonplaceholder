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
exports.deleteRecord = exports.putRecord = exports.postRecord = exports.getRecordsBase64 = exports.getRecords = void 0;
const record_model_1 = __importDefault(require("../models/record.model"));
const getRecords = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { limit = 100, startAt = 0 } = req.query;
    const [total, records] = yield Promise.all([
        record_model_1.default.countDocuments(),
        record_model_1.default.find()
            .skip(Number(startAt))
            .limit(Number(limit))
    ]);
    res.status(200).json({
        total,
        records
    });
});
exports.getRecords = getRecords;
const getRecordsBase64 = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const record = yield record_model_1.default.findById(id);
    const recordEncoded = btoa(JSON.stringify(record));
    res.status(200).json({
        record: recordEncoded
    });
});
exports.getRecordsBase64 = getRecordsBase64;
const postRecord = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { date, method, response } = req.body;
    const record = new record_model_1.default({ date, method, response });
    yield record.save();
    res.status(200).json({
        msg: 'Registro guardado con éxito',
        record
    });
});
exports.postRecord = postRecord;
const putRecord = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { date, method, response } = req.body;
    const record = yield record_model_1.default.findByIdAndUpdate(id, { date, method, response });
    res.status(200).json({
        msg: 'Registro actualizado con éxito',
        record
    });
});
exports.putRecord = putRecord;
const deleteRecord = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const [total, record] = yield Promise.all([
        record_model_1.default.countDocuments(),
        record_model_1.default.findByIdAndDelete(id)
    ]);
    res.status(200).json({
        msg: 'Registro borrado con éxito',
        total,
        record
    });
});
exports.deleteRecord = deleteRecord;
// ACTIVAR PARA REALIZAR BORRADO LÓGICO Y NO FISICO DE LA BASE DE DATOS
// export const deleteRecord = async ( req: Request , res: Response ):Promise<void> => {
//     const { id } = req.params;
//     const [ total, record ] = await Promise.all([
//         Record.countDocuments({ active: true }),
//         Record.findByIdAndUpdate( id, { active: false } )
//     ]);
//     res.status(200).json({
//         msg: 'Registro borrado con éxito',
//         total,
//         record
//     });
// }
//# sourceMappingURL=records.controller.js.map