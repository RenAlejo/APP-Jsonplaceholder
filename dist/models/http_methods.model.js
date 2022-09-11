"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const HttpMethods = new mongoose_1.Schema({
    method: {
        type: String,
        required: true,
        unique: true
    },
    active: {
        type: Boolean,
        default: true
    }
});
exports.default = (0, mongoose_1.model)('http_methods', HttpMethods);
//# sourceMappingURL=http_methods.model.js.map