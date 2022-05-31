import { Router, Request, Response, NextFunction } from 'express';
import Controller from '@/utils/interfaces/controller.interface';
import HttpException from '@/utils/exceptions/http.exception';
import validationMiddleware from '@/middleware/validation.middleware';
import validate from '@/resources/post/post.validation';
import PostService from '@/resources/post/post.service';
import Post from '@/resources/post/post.interface';

class PostController implements Controller {
	public path = '/posts';
	public router = Router();
	private PostService = new PostService();

	// get ->
	// post -> new create
	// put -> update
	// delete -> delete
	constructor() {
		this.initialiseRoutes();
	}

	private initialiseRoutes(): void {
		// .post here indicates a post request to out /posts route
		this.router.post(
			`${this.path}`,
			validationMiddleware(validate.create),
			this.create
		);

		// Fetching posts from the database
		this.router.get(`${this.path}`, this.fetch);
		this.router.get(`${this.path}/:id`, this.fetch);
	}

	// Method to create a new post
	private create = async (
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<Response | void> => {
		try {
			const { title, body, author, imglink } = req.body;
			const postRes = await this.PostService.create(
				title,
				body,
				author,
				imglink
			);
			res.status(201).send({ postRes });
		} catch (e: any) {
			// e.message will contain the message sent from the service throwing the error
			next(new HttpException(400, e.message));
		}
	};

	// Method to fetch posts
	private fetch = async (
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<Response | void> => {
		try {
			const id = req.params.id;
			console.log(req.body);
			let postRes: Post[] | null;
			if (id) {
				postRes = await this.PostService.fetch(id);
			} else {
				postRes = await this.PostService.fetch();
			}
			res.status(200).json({ postRes });
		} catch (e: any) {
			next(new HttpException(404, e.message));
		}
	};
}

export default PostController;
