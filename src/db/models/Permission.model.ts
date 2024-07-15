import mongoose from 'mongoose';
const { Schema } = mongoose;

const permissionSchema = new Schema({
    type: {
        type: String,
        required: true
    },
    desc: {
        type: String,
    }
},{
    collection: "permissions"
});

const Permission = mongoose.model('Permission', permissionSchema);
export { Permission, permissionSchema };
