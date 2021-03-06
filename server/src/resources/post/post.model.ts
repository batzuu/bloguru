import { model, Schema } from 'mongoose';
import Post from '@/resources/post/post.interface';

const postSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		body: {
			type: String,
			required: true,
		},
		author: {
			type: String,
			required: true,
		},
		imglink: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

export default model<Post>('Post', postSchema);
