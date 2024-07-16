import mongoose from "mongoose";
import { USER_STATUS, USER_TYPE } from "../../utils/constants";
const { Schema } = mongoose;

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        mobile: {
            type: String,
            default: null,
        },
        user_type: {
            type: String,
            enum: Object.values(USER_TYPE),
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            enum: Object.values(USER_STATUS),
            default: USER_STATUS.ACTIVE,
            required: true,
        },
        last_login: {
            type: Date,
            default: null,
        },
        role: {
            type: Schema.Types.ObjectId,
            ref: "Role",
            default: null,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        updatedAt: {
            type: Date,
            default: Date.now,
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: "User",
            default: null,
        },
        updatedBy: {
            type: Schema.Types.ObjectId,
            ref: "User",
            default: null,
        },
        slug: {
            type: String,
        },
    },
    { collection: "users" }
);

userSchema.index({ mobile: 1 }, { unique: true, partialFilterExpression: { mobile: { $type: "string" } } });

const User = mongoose.model("User", userSchema);
export { User, userSchema };
