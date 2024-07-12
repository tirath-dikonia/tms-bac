import mongoose from 'mongoose';
const { Schema } = mongoose;

const mailLogSchema = new Schema({
    task: {
        type: Schema.Types.ObjectId,
        ref: 'Sheet', // Assuming Sheet model for tasks
        required: true,
    },
    to: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['Sent', 'Failed', 'Pending'],
        default: 'Pending',
    },
    createdBy: {
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
}, { collection: 'mail_logs' });

const MailLog = mongoose.model('MailLog', mailLogSchema);
export { MailLog, mailLogSchema };
