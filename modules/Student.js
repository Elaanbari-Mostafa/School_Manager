import { DataTypes } from 'sequelize';
import { sequelize } from '../configs/SequelizeMySql.js';

const Student = sequelize.define('Student', {
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
        type: DataTypes.DATE,
        allowNull: false,
    },
    dateNaissance: {
        type: DataTypes.DATE,
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
});

export default Student;