import path from 'path';
import express from 'express';
import cors from 'cors';
import routes from './routes/index';
import { start } from './start';
import { getWhiteList } from './utils';

const rootPath = path.resolve(path.dirname(''));
const app = express();

app.use(
  cors({
    origin: getWhiteList,
    optionsSuccessStatus: 200,
  }),
  express.json(),
  express.static(path.join(rootPath, 'build'))
);

// routes
routes(app);

// start app
start(app);
