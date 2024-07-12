import mongoose from 'mongoose';
import { TASK_STATUS } from '../../utils/constants';
const { Schema } = mongoose;

const sheetSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
    },
    taskType: {
        type: Schema.Types.ObjectId,
        ref: 'TaskType',
        required: true,
    },
    status: {
        type: String,
        enum: Object.values(TASK_STATUS),
        required: true,
    },
    project: {
        type: Schema.Types.ObjectId,
        ref: 'Project',
        required: true,
    },
    total_hours: {
        type: Number,
        required: true,
    },
    submittedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        default: null,
    },
    updatedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        default: null,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }
}, { collection: 'sheets' });

const Sheet = mongoose.model('Sheet', sheetSchema);
export { Sheet, sheetSchema };
