import { DataTypes } from 'sequelize';

import { userRoleTableName } from '../common/Constant.js';
import { sequelize } from '../configs/SequelizeMySql.js';

const UserRole = sequelize.define(userRoleTableName, {});

export default UserRole;
