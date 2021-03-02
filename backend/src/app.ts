import express from 'express';
import 'express-async-errors';
import bodyParser from 'body-parser';
import routes from './routes';
import ErrorHandlerMiddleware from './middlewares/ErrorHandlerMiddleware';

const app: express.Application = express();
const errorHandlerMiddleware: ErrorHandlerMiddleware = new ErrorHandlerMiddleware();

app.use(bodyParser.json());
app.use('/api', routes);
app.use(errorHandlerMiddleware.handleErrors);

export default app;
