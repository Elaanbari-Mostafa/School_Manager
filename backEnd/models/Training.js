import { DataTypes } from 'sequelize';

import { trainingTableName } from '../common/Constant.js';
import { sequelize } from '../configs/SequelizeMySql.js';

const Training = sequelize.define(trainingTableName, {
    libelle: {
        type: DataTypes.STRING,
        allowNull: false, 
    },
});

export default Training;
