import { Request, Response, NextFunction, RequestHandler } from 'express';
import Joi from 'joi';

function validationMiddleware(schema: Joi.Schema ): RequestHandler{
	return async(
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<void> => {
		const validationOptions: Joi.AsyncValidationOptions = {
			abortEarly: false,
			allowUnknown: true,
			stripUnknown: true,
		};

		try {
			// Value is output after validation
			const value = await schema.validate(req.body, validationOptions).value;
			req.body = value;
			next();
		} catch (e: any) {
			const errors: string[] = [];
			e.details.forEach((error: Joi.ValidationErrorItem)=> {
				errors.push(error.message)	
			});
			res.status(400).send({ errors })
		}
	};
}

export default validationMiddleware;