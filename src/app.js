import express from 'express';
import routes from './routes';


class App{
constructor(){
    this.server = express();

}
routes(){
    this.server.use(routes);
}
}

export default new App();

