import "./env";

import express from "express";
import bodyParser from "body-parser";

import { router } from "./routes/main";

const { PORT } = process.env;

export class Server {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.setup();
    this.setRoutes();
    this.init();
  }

  private init(): void {
    this.app.listen(PORT || 3000, this.listen);
  }

  private listen(err: any): void {
    if (err) throw err;

    console.log("> Listening 🐨");
  }
  private setup = (): void => {
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json({ limit: "50mb" }));
  };

  private setRoutes = (): void => {
    this.app.use("/", router);
  };
}

module.exports = new Server();
