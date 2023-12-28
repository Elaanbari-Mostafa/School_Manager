import { DataTypes } from 'sequelize';

import { sequelize } from '../configs/SequelizeMySql.js';
import { subscriptionTableName } from '../common/Constant.js';
import Level from './Level.js';

const Subscription = sequelize.define(subscriptionTableName, {
    Duree: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    DureePasser: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    trainingPrice: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
}, {
    // Use a callback function to define associations
    hooks: {
        afterDefine: (subscriptionModel) => { 
            const { models } = sequelize;
            subscriptionModel.belongsTo(models.Student, { foreignKey: 'studentId' });
            //Subscription.hasOne(Level, { foreignKey: 'levelId' });
            subscriptionModel.hasOne(models.Training, { foreignKey: 'trainingId' });
            subscriptionModel.hasOne(models.Timetable, { foreignKey: 'timetableId' });
        },
    }, 
});

// Subscription.hasOne(Level, { foreignKey: 'levelId' });
// // Define association
// Subscription.belongsTo(Student, {  fore ignKey: 'studentId' });

export default Subscription;