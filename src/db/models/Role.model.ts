import mongoose from 'mongoose';
const { Schema } = mongoose;

const roleSchema = new Schema({
    role: {
        type: String,
        unique: true,
        required: true
    },
    desc: {
        type: String,
        default: null
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
