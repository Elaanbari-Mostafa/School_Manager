import { DataTypes } from 'sequelize';

import { sequelize } from '../configs/SequelizeMySql.js';
import { subscriptionTableName } from '../common/Constant.js';

const Subscription = sequelize.define(subscriptionTableName, {
    duree: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    dureePasser: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    trainingPrice: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    paidAmount: {
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

            //Subscription.hasOne(Level, { foreignKey: 'levelId' });
            //subscriptionModel.hasOne(models.Training, { foreignKey: 'trainingId' });
            //subscriptionModel.hasOne(models.Timetable, { foreignKey: 'timetableId' });
        },
    },
});

// Subscription.hasOne(Level, { foreignKey: 'levelId' });
// // Define association
// Subscription.belongsTo(Student, {  fore ignKey: 'studentId' });

export default Subscription;