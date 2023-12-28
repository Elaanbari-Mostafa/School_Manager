import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// Load environment variables from a .env file
dotenv.config();

// Extract environment variables
const { DATABASE, USERNAMEDB, PASSWORDDB, HOSTDB } = process.env;

// Create a Sequelize instance for connecting to the MySQL database
export const sequelize = new Sequelize(DATABASE, USERNAMEDB, PASSWORDDB, {
    host: HOSTDB,
    dialect: 'mysql',
});

// Connect to the database and sync models
export const sequelizeSync = async (force = false) => {
    try {
        // Synchronize the model with the database
        await sequelize.sync({ force: force });

        // Log a successful connection message
        console.log('Connected to the MySQL database and synced models');
    } catch (err) {
        // Log an error message if the connection fails
        console.error('Error connecting to MySQL:', err);
    }
};
