import express, { Router } from "express";

import video from "../controllers/main";

const router: Router = Router();

router.get("/", (req: express.Request, res: express.Response) =>
  res.send("Happy Hacking! 🚀")
);

router.post("/normalize", video.create);

export { router };
