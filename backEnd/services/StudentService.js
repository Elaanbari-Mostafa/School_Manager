import { Op } from "sequelize";
import { convertToDateString } from "../Tools/Helper.js";

export const getStudentSearchByFildsData = (searchParams) => {
    const {
        identifiant,
        nom,
        prenom,
        dateInscription,
        dateNaissance,
        email,
        adresse,
        gsm,
    } = searchParams;

    const whereClause = {};

    if (identifiant) {
        whereClause.identifiant = identifiant;
    }

    if (nom) {
        whereClause.nom = {
            [Op.like]: `%${nom}%`, // Case-insensitive LIKE query
        };
    }

    if (prenom) {
        whereClause.prenom = {
            [Op.like]: `%${prenom}%`,
        };
    }

    if (dateInscription) {
        whereClause.dateInscription = convertToDateString(dateInscription);
    }

    if (dateNaissance) {
        whereClause.dateNaissance = convertToDateString(dateNaissance);
    }

    if (email) {
        whereClause.email = {
            [Op.like]: `%${email}%`,
        };
    }

    if (adresse) {
        whereClause.adresse = {
            [Op.like]: `%${adresse}%`,
        };
    }

    if (gsm) {
        whereClause.gsm = gsm;
    } 

    return whereClause;
};
