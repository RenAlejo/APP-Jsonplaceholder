"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Record = new mongoose_1.Schema({
    date: {
        type: Date,
        default: Date.now,
        required: true,
    },
    method: {
        type: String,
        required: true,
    },
    response: {
        type: Object,
        required: true
    },
    active: {
        type: Boolean,
        default: true
    }
});
exports.default = (0, mongoose_1.model)('Record', Record);
//# sourceMappingURL=record.model.js.map