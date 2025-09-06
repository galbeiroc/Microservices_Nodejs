import express from 'express';
import bodyparser from 'body-parser';
import { randomBytes } from 'crypto';

const app = express();
app.use(bodyparser.json());
const commentsByPostId = {};
const PORT = 4001;

app.get('/posts/:id/comments', (req, res) => {
  const { id } = req.params;

  res.json(commentsByPostId[id] || []);
});

app.post('/posts/:id/comments', (req, res) => {
  const { id } = req.params;
  const { content } = req.body;
  const commentId = randomBytes(4).toString('hex');
  const comments = commentsByPostId[id] || [];
  console.log(comments);
  comments.push({ id: commentId, content })
  commentsByPostId[id] = comments;

  res.status(201).json(comments);
})

app.listen(PORT, () => {
  console.log(`Comments service listening on port ${PORT}`);
});