import { DataTypes } from 'sequelize';

import { userTableName } from '../common/Constant.js';
import { sequelize } from '../configs/SequelizeMySql.js';

const User = sequelize.define(userTableName, {
    userName: {
        type: DataTypes.STRING,
        allowNull: false, 
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false, 
    },
});

export default User;
