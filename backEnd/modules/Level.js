import { DataTypes } from 'sequelize';

import sequelize from '../configs/SequelizeMySql.js';

const Level = sequelize.define('Level', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    libelle: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export default Level;
