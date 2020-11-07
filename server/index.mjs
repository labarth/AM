import path from 'path';
import express from 'express';
import routes from './routes/index';
import { start } from './start';

const rootPath = path.resolve(path.dirname(''));
const app = express();

app.use(
  express.json(),
  express.static(path.join(rootPath, 'build'))
);

// routes
routes(app);

// start app
start(app);
