import mongoose from 'mongoose';
const { Schema } = mongoose;

const authLogSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    action: {
        type: String,
        enum: ['Login', 'Logout', 'PasswordChange'],
        required: true,
    },
    ip: {
        type: String,
        required: true,
    },
    userAgent: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
}, { collection: 'auth_logs' });

const AuthLog = mongoose.model('AuthLog', authLogSchema);
export { AuthLog, authLogSchema };
