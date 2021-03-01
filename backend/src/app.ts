import express from 'express';

const app: express.Application = express();

app.get('/api/weather', (req, res) => res.json({ message: 'success' }));

app.listen(3001, () => {
  console.log('Server running');
});
