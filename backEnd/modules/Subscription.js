import { DataTypes } from 'sequelize';

import { sequelize } from '../configs/SequelizeMySql.js';
import Student from './Student.js';
import { subscriptionTableName } from '../common/Constant.js';

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
            Subscription.belongsTo(models.Student, { foreignKey: 'studentId' });
            Subscription.belongsTo(models.Level, { foreignKey: 'levelId' });
            Subscription.belongsTo(models.Formation, { foreignKey: 'formationId' });
            Subscription.belongsTo(models.EmploiDuTemps, { foreignKey: 'emploiDuTempsId' });
        },
    },
});

// // Define association
// Subscription.belongsTo(Student, { foreignKey: 'studentId' });

export default Subscription;