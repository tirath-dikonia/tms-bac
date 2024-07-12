import mongoose from 'mongoose';
const { Schema } = mongoose;

const permissionSchema = new Schema({
    type: {
        type: String,
        required: true
    },
    desc: {
        type: String,
    },
    roles: [{
        type: Schema.Types.ObjectId,
        ref: 'Role'
    }]
},{
    collection: "permissions"
});

const Permission = mongoose.model('Permission', permissionSchema);
export { Permission, permissionSchema };
