import 'dotenv/config'
import App from './app'
import Controller from './interfaces/controller.interface'

// 
let controllers: Controller[] = [];

let app = new App(controllers, 3000);
app.listen();