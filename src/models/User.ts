import mongoose, { Document } from "mongoose"
import { Schema } from "mongoose"

export interface Iuser extends Document{
    name: string,
    email:  string,
    password: string,
    shareLink: string | null,
    share: boolean,
    createdAt: Date,
    updatedAt: Date
}

const userSchema = new Schema<Iuser>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    shareLink: {
        type: String,
        default: null
    },
    share: {
        type: Boolean,
        default: false
    }
},{
    timestamps: true
})

const User = mongoose.model<Iuser>("User", userSchema);
export default User;
