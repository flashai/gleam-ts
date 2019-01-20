import * as express from "express";
import axios, { AxiosPromise } from "axios";

const { HOST, PORT, ML_API } = process.env;

const ai = axios.create({ baseURL: ML_API });

async function create(req: express.Request, res: express.Response) {
  const { url } = req.body;
  try {
    const { data } = await ai.post("/", { url });
    //  const video_url = `${HOST}:${PORT}/tmp/${dest}`;
    res.send({ success: true, url });
  } catch (e) {
    res.send({ success: false, e: e.message });
  }

  console.log(req.body);
}

export default { create };
