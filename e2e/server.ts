import express from 'express';
import {join} from 'path';

const app = express();
app.use('/dist', express.static(join(__dirname, '../dist')));
app.use('/', (req, res, next) => {
  if(req.url.match(/\/home\/?/)) {
    req.url = req.url = '/';
  }
  express.static(join(__dirname, '.'))(req, res, next);
});

app.listen(8080, () => {
  console.log('server listening on 8080');
});
