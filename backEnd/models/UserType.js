import { DataTypes } from 'sequelize';

import { userTypeTableName } from '../common/Constant.js';
import { sequelize } from '../configs/SequelizeMySql.js';

const UserType = sequelize.define(userTypeTableName, {
    typeName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export default UserType;
  