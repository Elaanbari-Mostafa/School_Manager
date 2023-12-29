import Timetable from "../modules/Timetable.js";

export const getAllTimetibles = async (req, res) => {
    try {
        const timetibles = await Timetable.findAll();
        return res.status(200).json(timetibles);
    } catch (error) {
        return res.status(500).send('Internal Server Error');
    }
};