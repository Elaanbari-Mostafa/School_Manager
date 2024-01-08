import { DataTypes } from 'sequelize';

import { groupTableName } from '../common/Constant.js';
import { sequelize } from '../configs/SequelizeMySql.js';

const Group = sequelize.define(groupTableName, {
    groupName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export default Group;
