import { DataTypes } from 'sequelize';

import { sequelize } from '../configs/SequelizeMySql.js';
import { studentTableName, subscriptionTableName } from '../common/Constant.js';
import Subscription from './Subscription.js'

const Student = sequelize.define(studentTableName, {
    identifiant: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nom: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    prenom: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dateInscription: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    dateNaissance: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        },
    },
    adresse: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    gsm: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
);

         
export default Student;