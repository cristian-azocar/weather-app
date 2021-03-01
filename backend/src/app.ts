import express from 'express';

const app: express.Application = express();

app.get('/api/weather', (req, res) => res.json({ message: 'success' }));

export default app;
