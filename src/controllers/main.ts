import * as express from "express";
import axios, { AxiosInstance } from "axios";

const { HOST, PORT, ML_API } = process.env;

const ai: AxiosInstance = axios.create({ baseURL: ML_API });

async function create(req: express.Request, res: express.Response) {
  const { url } = req.body;

  try {
    const { data } = await ai.post("/normalize", { url });
    const video_url = `${HOST}:${PORT}/${data.destination}`;
    res.send({ success: true, url: video_url });
  } catch (e) {
    res.send({ success: false, e: e.message });
  }
}

export default { create };
