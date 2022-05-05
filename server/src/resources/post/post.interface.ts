import { Document } from "mongoose";

interface Post extends Document {
	title: string,
	body: string,
	author: string
}

export default Post