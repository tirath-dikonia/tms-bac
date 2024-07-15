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
},{
    collection: 'roles'
});

const Role = mongoose.model('Role', roleSchema);
export { Role, roleSchema };
