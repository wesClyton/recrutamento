import express from 'express';
import routes from './routes';

class Index {
  constructor() {
    this.app = express(); // a aplicação será gerenciada pelo express
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json()); // a aplicação utiliará dados no formato json
  }

  routes() {
    this.app.use(routes); // as rotas serão definidas no arquivo routes
  }
}

export default new Index().app;
