import mongoose from 'mongoose';
const { Schema } = mongoose;

const projectAssignmentSchema = new Schema({
    project: {
        type: Schema.Types.ObjectId,
        ref: 'Project',
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    assignedBy: {
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
}, { collection: 'project_assignments' });

const ProjectAssignment = mongoose.model('ProjectAssignment', projectAssignmentSchema);
export { ProjectAssignment, projectAssignmentSchema };
