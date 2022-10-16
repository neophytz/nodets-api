import { Document, model, Schema } from "mongoose";
import { z } from 'zod';

export const PostValidator = z.object({
    username: z.string(),
    password: z.string(),
    caption: z.string().min(2).max(50),
    description: z.string().optional(),
    image_url: z.string().url()
})

export type IPost = z.infer<typeof PostValidator>;

export interface IPostModel extends Document, IPost {}

const PostSchema = new Schema<IPostModel>({
    caption: {
        type: String,
        required: true,
        trim: true,
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image_url: {
        type: String,
        required: true
    }
}, {
    versionKey: false,
    timestamps: true
});

export const Post = model<IPostModel>('Post', PostSchema);