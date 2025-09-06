import express from 'express';
import bodyParser from 'body-parser';
import { randomBytes } from 'crypto';

const app = express();
const PORT = 4000;
const posts = {};

app.use(bodyParser.json());

app.get('/posts', (req, res) => {
  res.json(posts);
})

app.post('/posts', (req, res) => {
  const id = randomBytes(4).toString('hex');
  const { title } = req.body;
  posts[id] = { id, title }

  res.status(201).json(posts[id])
})

app.listen(PORT, () => {
  console.log('Running on port 4000');
})