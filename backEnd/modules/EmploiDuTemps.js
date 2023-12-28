import { DataTypes } from 'sequelize';

import sequelize from '../configs/SequelizeMySql.js';

const EmploiDuTemps = sequelize.define('EmploiDuTemps', {
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

export default EmploiDuTemps;
