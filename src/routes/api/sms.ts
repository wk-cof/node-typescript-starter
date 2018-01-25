import * as Express from '@types/express';

export default class Sms {

  public static getme(req: Express.Request, res: Express.Response) {
    res.json({"hello": "world"});
  }

}

