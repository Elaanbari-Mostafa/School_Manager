import express, { json } from 'express';
import { sequelizeSync } from './configs/SequelizeMySql.js';
import Level from './modules/Level.js';
import Subscription from './modules/Subscription.js';
import RouterManager from "./routes/RouterManager.js";


const app = express();
const port = process.env.PORT || 5000;
app.use(json());

Level.hasOne(Subscription);
Subscription.belongsTo(Level);


await sequelizeSync(true) 
RouterManager(app)
// Middleware to parse JSON requests
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});  