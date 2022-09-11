import { Schema, model } from 'mongoose';

const HttpMethods = new Schema({
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

export default model( 'http_methods', HttpMethods );