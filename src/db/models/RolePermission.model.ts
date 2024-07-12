import mongoose from 'mongoose';
const { Schema } = mongoose;

const rolePermissionSchema = new Schema({
    role: {
        type: Schema.Types.ObjectId,
        ref: 'Role',
        required: true
    },
    permission: {
        type: Schema.Types.ObjectId,
        ref: 'Permission',
        required: true
    }
}, {collection: "role_permissions"});

const RolePermission = mongoose.model('RolePermission', rolePermissionSchema);
export { RolePermission, rolePermissionSchema };
