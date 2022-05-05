import PostModel from "@/resources/post/post.model";
import Post from "@/resources/post/post.interface";

// Logic to create a new post
class PostService {
	private post = PostModel;

	public async create(title: string, body: string, author: string): Promise<Post> {
		try {
			// the create in this line is the mongo create method
			const post = await this.post.create({ title, body, author });
			return post;
		} catch(e) {
			console.log(e);
			throw new Error('Unable to create post');
		}
	}
}

export default PostService