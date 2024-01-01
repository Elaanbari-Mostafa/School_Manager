import Student from "../modules/Student.js";
import { getStudentSearchByFildsData } from '../services/StudentService.js'

export const getAllStudents = async (req, res) => {
    try {
        const students = await Student.findAll();
        return res.status(200).json(students);
    } catch (error) {
        console.log('Error fetching all students:', error);
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
        console.log('Error fetching student by ID:', error);
        return res.status(500).send('Internal Server Error');
    }
};

export const createStudent = async (req, res) => {
    try {
        const studentData = req.body;
        const student = await Student.create(studentData);
        return res.status(201).json(student);
    } catch (error) {
        console.log('Error creating student:', error);
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
        console.log('Error deleting student:', error);
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
        console.log('Error updating student:', error);
        return res.status(500).send('Internal Server Error');
    }
};

export const getSubscriptionByStudentId = async (req, res) => {
    try {
        const { id } = req.params;
        const student = await Student.findByPk(id);

        if (!student) {
            return res.status(404).send("Student not found"); // Or handle accordingly
        }

        const subscriptions = await student.getSubscriptions();
        return res.status(200).json(subscriptions);
    } catch (error) {
        console.log('Error get subsciption student:', error);
        return res.status(500).send('Internal Server Error');
    }
}

export const findStudentsByFields = async (req, res) => {
    try {
        const searchCriteria = getStudentSearchByFildsData(req.body);
        const students = await Student.findAll({
            where: searchCriteria,
        });

        return res.status(200).json(students);
    } catch (error) {
        console.log(`Error finding students by fields: ${error.message}`);
        res.status(500).send('Internal Server Error')
    }
}