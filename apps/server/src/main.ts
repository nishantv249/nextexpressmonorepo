/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';
import next  from 'next';
import nextapp from 'apps/client/src';

const dev = process.env.NODE_ENV !== 'production';

const handle = nextapp.getRequestHandler();
nextapp.prepare().then(() => {
const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to server!' });
});

app.get('*', (req, res) => {
  handle(req, res);
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
})