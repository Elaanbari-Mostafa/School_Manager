import { DataTypes } from 'sequelize';

import { levelTableName } from '../common/Constant.js';
import { sequelize } from '../configs/SequelizeMySql.js';

const Level = sequelize.define(levelTableName, {
    libelle: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    // Use a callback function to define associations
    hooks: {
        afterDefine: (levelModule) => {
            const { models } = sequelize;
            //Level.belongsTo(Subscription, { as: subscriptionTableName, foreignKey: 'subscriptionId' });
        },
    },
});
    
export default Level;
