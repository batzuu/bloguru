import { Router, Request, Response } from 'express';
import Controller from '@/utils/interfaces/controller.interface';
import HttpException from '@/utils/exceptions/http.exception';
import validationMiddleware from '@/middleware/validation.middleware';

class PostController implements Controller {
	public path = '/posts';
	public router = Router();

	constructor() {
		this.initialiseRoutes();
	}

	private initialiseRoutes(): void {

	}
}
