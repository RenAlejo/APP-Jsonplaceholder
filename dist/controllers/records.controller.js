"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRecord = exports.putRecord = exports.postRecord = exports.getRecordsBase64 = exports.getRecords = void 0;
const getRecords = (req, res) => {
    res.json({
        msg: 'get record'
    });
};
exports.getRecords = getRecords;
const getRecordsBase64 = (req, res) => {
    res.json({
        msg: 'get record b64'
    });
};
exports.getRecordsBase64 = getRecordsBase64;
const postRecord = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: 'Post recored'
    });
};
exports.postRecord = postRecord;
const putRecord = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: 'Put record'
    });
};
exports.putRecord = putRecord;
const deleteRecord = (req, res) => {
    res.json({
        msg: 'delete record'
    });
};
exports.deleteRecord = deleteRecord;
//# sourceMappingURL=records.controller.js.map