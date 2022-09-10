"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const records_controller_1 = require("../controllers/records.controller");
const recordsRouter = (0, express_1.Router)();
recordsRouter.get('/', records_controller_1.getRecords);
recordsRouter.get('/b64/:id', records_controller_1.getRecordsBase64);
recordsRouter.post('/ ', records_controller_1.postRecord);
recordsRouter.put('/:id ', records_controller_1.putRecord);
recordsRouter.delete('/:id ', records_controller_1.deleteRecord);
exports.default = recordsRouter;
//# sourceMappingURL=records.routes.js.map