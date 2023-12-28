import Level from "../modules/Level.js";
import Student from "../modules/Student.js";
import Subscription from "../modules/Subscription.js";

export const getAllStudents = async (req, res) => {
    try {
        const students = await Student.findAll();
        return res.status(200).json(students);
    } catch (error) {
        console.error('Error fetching all students:', error);
        return res.status(500).send('Internal Server Error');
    }
};

export const getStudentById = async (req, res) => {
    try {
        const { id } = req.params;
        const student = await Student.findByPk(id);

        if (!student) {
            return res.status(404).json({ error: 'Student not found' });
        }

        return res.status(200).json(student);
    } catch (error) {
        console.error('Error fetching student by ID:', error);
        return res.status(500).send('Internal Server Error');
    }
};

export const createStudent = async (req, res) => {
    try {
        const studentData = req.body;
        const student = await Student.create(studentData);
        const level = await Level.findByPk(1);
        console.log(level);
        const subscription = await Subscription.create({ "levelId": "1", "trainingId": "1", "Duree": 79354, "DureePasser": 33712, "trainingPrice": "633.00", "timetableId": "1", "status": true });
        await subscription.setLevel(level);
        await student.addSubscription(subscription); 
        return res.status(201).json(student);
    } catch (error) {
        console.error('Error creating student:', error);
        return res.status(500).send('Internal Server Error');
    }
};

export const deleteStudentById = async (req, res) => {
    try {
        const studentId = req.params.id;
        const student = await Student.findByPk(studentId);

        if (!student) {
            return res.status(404).json({ error: 'Student not found' });
        }

        await student.destroy();

        return res.send('Student deleted successfully');
    } catch (error) {
        console.error('Error deleting student:', error);
        return res.status(500).send('Internal Server Error');
    }
};

export const updateStudentById = async (req, res) => {
    try {
        const studentId = req.params.id;
        const updatedData = req.body;

        // Find the student by ID
        const student = await Student.findByPk(studentId);

        if (!student) {
            return res.status(404).json({ error: 'Student not found' });
        }

        // Update the student data
        await student.update(updatedData);

        // Fetch the updated student
        const updatedStudent = await Student.findByPk(studentId);

        return res.json(updatedStudent);
    } catch (error) {
        console.error('Error updating student:', error);
        return res.status(500).send('Internal Server Error');
    }
};
