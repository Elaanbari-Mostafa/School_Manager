import Training from "../modules/Training.js";

export const getAllTrainings = async (req, res) => {
    try {
        const trainings = await Training.findAll();
        return res.status(200).json(trainings);
    } catch (error) {
        return res.status(500).send('Internal Server Error');
    }
};