import mongoose, { Document } from "mongoose";
import { Schema } from "mongoose";

export interface Itags extends Document{
    title: string
}

const tagsSchema = new Schema<Itags>({
    title: {
        type: String,
        required: true,
        unique: true
    }
});

const Tags = mongoose.model<Itags>("Tags", tagsSchema);
export default Tags;