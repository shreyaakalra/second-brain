import mongoose, { Document, Types } from "mongoose";
const { Schema } = mongoose;

export interface Ilink extends Document{
    hash: string,
    owner: Types.ObjectId
}

const linkSchema = new Schema<Ilink>({
    hash: {
        type: String,
        required: true,
        unique: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
})

const Link = mongoose.model<Ilink>("Link", linkSchema);
export default Link;