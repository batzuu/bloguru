import { Router, Request, Response, NextFunction } from 'express';
import Controller from '@/utils/interfaces/controller.interface';
import HttpException from '@/utils/exceptions/http.exception';
import validationMiddleware from '@/middleware/validation.middleware';
import validate from '@/resources/post/post.validation'
import PostService from '@/resources/post/post.service';

class PostController implements Controller {
	public path = '/posts';
	public router = Router();
	private PostService = new PostService();

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
	}

	// Method to create a new post
	private create = async (
		req: Request, res: Response, next: NextFunction
	): Promise<Response | void> => {
		try {
			const { title, body, author } = req.body;
			const postRes = await this.PostService.create(title, body, author);
			res.status(201).send({ postRes });
		} catch (e: any) {
			// e.message will contain the message sent from the service throwing the error
			next(new HttpException(400, e.message));
		}
	}
}

export default PostController
