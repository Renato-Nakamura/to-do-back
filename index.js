
import express from 'express';
import cors from 'cors';
import routes from './src/routes/lists.routes.js';
import databaseConnection from './src/database/dbConnection.js';

const app = express();
const port = process.env.PORT || 3002;

databaseConnection();

app.use(express.json());
app.use(cors());
app.use('/', routes);

app.listen(port, () => {
  console.log(`server http://localhost:${port}`);
});
