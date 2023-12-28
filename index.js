import express, { json } from 'express';
import dotenv from 'dotenv';
import { sequelize, sequelizeSync } from './configs/SequelizeMySql.js';
import RouterManager from "./routes/RouterManager.js";

const app = express();
const port = process.env.PORT || 5000;
app.use(json());

await sequelizeSync()
RouterManager(app)
// Middleware to parse JSON requests
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}); 