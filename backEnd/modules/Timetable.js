import { DataTypes } from 'sequelize';

import { timetableTableName } from '../common/Constant.js';
import { sequelize } from '../configs/SequelizeMySql.js';

const Timetable = sequelize.define(timetableTableName, {
    libelle: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export default Timetable;
