import mongoose, { Document } from "mongoose"
import { Schema } from "mongoose"

export interface Iuser extends Document{
    name: string,
    email:  string,
    password: string,
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
    }
},{
    timestamps: true
})

const User = mongoose.model<Iuser>("User", userSchema);
export default User;
