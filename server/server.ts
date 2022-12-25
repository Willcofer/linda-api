import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server from file located in server directory');
});

app.listen(port, () => {
  console.log(`⚡️[server]:Linda API Server is running at https://localhost:${port}`);
});