import mongoose from 'mongoose';
const { Schema } = mongoose;

const taskTypeSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    desc: {
        type: String,
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
}, { collection: 'task_types' });

const TaskType = mongoose.model('TaskType', taskTypeSchema);
export { TaskType, taskTypeSchema };
