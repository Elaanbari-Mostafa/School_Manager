import { DataTypes } from 'sequelize';

import { roleTableName } from '../common/Constant.js';
import { sequelize } from '../configs/SequelizeMySql.js';

const Role = sequelize.define(roleTableName, {
    libelle: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export default Role;
