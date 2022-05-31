import { Document } from "mongoose";

interface Post extends Document {
	title: string,
	body: string,
	author: string,
	imglink: string
}

export default Post