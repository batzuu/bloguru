import UserModel from './user.model';
import token from '@/utils/token';

class UserService {
	private user = UserModel;

	/**
	 * Attemps to register a
	 * new user
	 */
	public async register(
		name: string,
		email: string,
		password: string,
		role: string
	): Promise<Error | string> {
		try {
			const user = await this.user.create({ name, email, password, role });
			const accessToken = token.createToken(user);
			return accessToken;
		} catch (error) {
			console.log(error);
			throw new Error('Unable to create user');
		}
	}

	/**
	 * Attempts to login a user
	 */
	public async login(email: string, password: string): Promise<string | Error> {
		try {
			const user = await this.user.findOne({ email: email }).exec();
			if (!user) {
				throw new Error('Unable to find user with that Email address');
			}
			if (await user.isValidPassword(password)) {
				const accessToken = token.createToken(user);
				return accessToken;
			} else {
				throw new Error('Wrong Credentials given');
			}
		} catch (error) {
			console.log(error);
			throw new Error('Unable to log the user in');
		}
	}
}

export default UserService;
