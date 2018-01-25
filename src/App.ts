import * as express from 'express';
import Sms from './routes/api/sms';

class App {
  public express: express.Application;

  constructor () {
    this.express = express();
    this.mountRoutes();
  }

  private mountRoutes (): void {
    const router = express.Router();
    router.get('/', (req, res) => {
      res.json({
        message: 'Hello World!'
      });
    });
    this.express.use('/', router);

    router.get('api/sms', Sms.getme);
  }
}

export default new App().express;
