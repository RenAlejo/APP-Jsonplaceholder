import { Schema, model } from 'mongoose';

const Record = new Schema({
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

export default model( 'Record', Record );