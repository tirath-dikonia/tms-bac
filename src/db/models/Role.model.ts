import mongoose from 'mongoose';
const { Schema } = mongoose;

const roleSchema = new Schema({
    role: {
        type: String,
        required: true
    },
    desc: {
        type: String
    },
    is_active: {
        type: Boolean,
        default: true
    },
    users: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    permissions: [{
        type: Schema.Types.ObjectId,
        ref: 'Permission'
    }]
},{
    collection: 'roles'
});

const Role = mongoose.model('Role', roleSchema);
export { Role, roleSchema };
