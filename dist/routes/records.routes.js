"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// import { check } from 'express-validator/check'
const records_controller_1 = require("../controllers/records.controller");
const db_validators_1 = require("../db/db.validators");
const record_validator_1 = __importDefault(require("../middlewares/record.validator"));
const { check } = require('express-validator');
const recordsRouter = (0, express_1.Router)();
recordsRouter.post('/', [
    check('date', 'Formato de fecha incorrecto.').isISO8601().toDate(),
    check('date', 'Date es un campo obligatorio.').not().isEmpty(),
    check('response', 'Response es un campo obligatorio.').not().isEmpty(),
    check('method', 'Method es un campo obligatorio.').not().isEmpty(),
    check('method', 'El método debe tener entre 3 y 6 letras.').isLength({ min: 3, max: 8 }),
    check('method').custom(db_validators_1.isValidHttpMethod),
    record_validator_1.default
], records_controller_1.postRecord);
recordsRouter.get('/', records_controller_1.getRecords);
recordsRouter.get('/b64/:id', [
    check('id', 'El id ingresado no es un id válido').isMongoId(),
    check('id').custom(db_validators_1.isAnExistingRecordId),
    record_validator_1.default
], records_controller_1.getRecordsBase64);
recordsRouter.put('/:id', [
    check('id', 'El id ingresado no es un id válido').isMongoId(),
    check('id').custom(db_validators_1.isAnExistingRecordId),
    check('date', 'Formato de fecha incorrecto.').isISO8601().toDate(),
    check('date', 'Date es un campo obligatorio.').not().isEmpty(),
    check('response', 'Response es un campo obligatorio.').not().isEmpty(),
    check('method', 'Method es un campo obligatorio.').not().isEmpty(),
    check('method', 'El método debe tener entre 3 y 6 letras.').isLength({ min: 3, max: 8 }),
    check('method').custom(db_validators_1.isValidHttpMethod),
    record_validator_1.default
], records_controller_1.putRecord);
recordsRouter.delete('/:id', [
    check('id', 'El id ingresado no es un id válido').isMongoId(),
    check('id').custom(db_validators_1.isAnExistingRecordId),
    record_validator_1.default
], records_controller_1.deleteRecord);
exports.default = recordsRouter;
//# sourceMappingURL=records.routes.js.map