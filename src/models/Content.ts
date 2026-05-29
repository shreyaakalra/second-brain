import mongoose, { Types, Document } from "mongoose";
const { Schema } = mongoose;

export interface Icontent extends Document{
    link: string,
    content: string,
    title: string,
    tags: [Types.ObjectId],
    owner: Types.ObjectId
}

const contentTypes = ['image', 'video', 'article', 'audio', 'tweet'];

const contentSchema = new Schema<Icontent>({
    link: {
        type: String,
        unique: true,
        required: true
    }, 
    content: {
        type: String,
        enum: contentTypes,
        required: true
    },
    title: {
        type: String,
        required: true
    }, 
    tags: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tags'
    }],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }

}, {
    timestamps: true
});

const Content = mongoose.model<Icontent>("Content", contentSchema);
export default Content;