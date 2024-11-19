import express from 'express';
import cors from 'cors';
import { db, createTables } from './database.js';

const app = express();
app.use(cors());
app.use(express.json());

createTables();

app.get('/api/workspaces', (req, res) => {
  const stmt = db.prepare('SELECT * FROM workspaces');
  const workspaces = stmt.all();
  res.json(workspaces);
});

app.post('/api/workspaces', (req, res) => {
  const { title, description } = req.body;
  const stmt = db.prepare('INSERT INTO workspaces (title, description) VALUES (?, ?)');
  const result = stmt.run(title, description);
  res.json({ id: result.lastInsertRowid });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});