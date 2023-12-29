import express, { json } from 'express';
import { sequelizeSync } from './configs/SequelizeMySql.js';
import RouterManager from "./routes/RouterManager.js";
import { CreateRelations } from './modules/index.js';

const app = express();
const port = process.env.PORT || 5000;
app.use(json());

CreateRelations();
await sequelizeSync(false) 
RouterManager(app)
// Middleware to parse JSON requests
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});  