import path from 'path';
import express from 'express';

const rootPath = path.dirname('../');
const app = express();

app.use(express.static(path.join(rootPath, 'build')));

app.get('/', (req, res) => {
	res.sendFile(path.join(rootPath, 'build', 'index.html'));
});

app.listen(2020);