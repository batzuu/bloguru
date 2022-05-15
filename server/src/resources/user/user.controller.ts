import { Router, Request, Response, NextFunction } from 'express';
import Controller from '@/utils/interfaces/controller.interface';
import HttpException from '@/utils/exceptions/http.exception';
import validationMiddleware from '@/middleware/validation.middleware';
import validate from '@/resources/user/user.validation';
import UserService from '@/resources/user/user.service';
import authenticated from '@/middleware/authenticated.middleware';

class UserController implements Controller {
	public path = '/users';
	public router = Router();
	private UserService = new UserService();

	constructor() {
		this.initialiseRoutes();
	}

	private initialiseRoutes(): void {
		this.router.post(
			`${this.path}/register`,
			validationMiddleware(validate.register),
			this.register
		);
	}

	private async register(
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<Response | void> {
		try {
			const { name, email, password } = req.body;

			const token = await this.UserService.register(
				name,
				email,
				password,
				'user'
			);
			res.status(201).json({ token });
		} catch (error: any) {
			next(new HttpException(400, error.message));
		}
	}
}
