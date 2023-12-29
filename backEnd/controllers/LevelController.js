import Level from "../modules/Level.js";

export const getAllLevels = async (req, res) => {
    try {
        const levels = await Level.findAll();
        return res.status(200).json(levels);
    } catch (error) {
        return res.status(500).send('Internal Server Error');
    }
};