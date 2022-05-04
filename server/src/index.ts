import 'dotenv/config';
import 'module-alias/register';
import App from './app';
import Controller from './utils/interfaces/controller.interface';
import validateEnv from '@/utils/validateEnv';

//

validateEnv();
let app = new App([], Number(process.env.PORT));
app.listen();
