import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config()
const env = process.env;

// Connect to the MySQL dastabase
export var sequelize;
(function () {
    sequelize = new Sequelize(env.DATABASE, env.USERNAMEDB, env.PASSWORDDB, {
        host: env.HOSTDB,
        dialect: 'mysql',
    });
})()

// Sync the model with the database
export const sequelizeSync = async () => {
    await sequelize.sync({ force: false })
        .then(() => {
            console.log('Connected to MySQL database and synced models');
        })
        .catch((err) => {
            console.error('Error connecting to MySQL:', err);
        });
}