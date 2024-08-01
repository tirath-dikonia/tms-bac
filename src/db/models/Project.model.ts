import mongoose from 'mongoose';
const { Schema } = mongoose;

const projectSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    desc: {
        type: String,
    },
    is_active: {
        type: Boolean,
        default: true,
    },
    start_date: {
        type: Date,
        required: true,
    },
    time_spent: {
        type: Number,
        default: 0,
    },
    hours_allocated: {
        type: Number,
        required: true,
    },
    deadline: {
        type: Date,
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
}, { collection: 'projects' });

const Project = mongoose.model('Project', projectSchema);
export { Project, projectSchema };
