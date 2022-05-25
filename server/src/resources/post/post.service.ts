import PostModel from '@/resources/post/post.model';
import Post from '@/resources/post/post.interface';

// Logic to create a new post
class PostService {
	private post = PostModel;

	public async create(
		title: string,
		body: string,
		author: string
	): Promise<Post> {
		try {
			// the create in this line is the mongo create method
			const post = await this.post.create({ title, body, author });
			return post;
		} catch (e) {
			console.log(e);
			throw new Error('Unable to create post');
		}
	}

	public async fetch(id?: string): Promise<Post[] | null> {
		try {
			let posts: Post[] = [];
			if (id) {
				const post = await this.post.findById(id);
				if (!post) {
					return null;
				}
				posts.push(post);
			} else {
				const allPosts = await this.post.find();
				allPosts.forEach((post) => {
					posts.push(post);
				});
			}
			return posts;
		} catch (e: any) {
			console.log(e);
			throw new Error('Error in fetching post');
		}
	}
}

export default PostService;
