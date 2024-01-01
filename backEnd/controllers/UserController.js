import User from "../modules/User.js";

export const createUser = async (req, res) => {
    try {
        const user = req.body;
        if (!user || !user.userTypeId) return res.status(202).json({ message: "Please complete your information" });

        const newUser = await User.create(user);
        await newUser.setUserType(user.userTypeId);

        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: "Error server, please try again." + error });
        console.log(error);
    }
}

export const updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const updatedUser = req.body;

        const existingUser = await User.findByPk(userId);

        if (!existingUser) {
            return res.status(404).json({ message: "User not found" });
        }

        // Update user information
        await existingUser.update(updatedUser);
        await existingUser.setUserType(updatedUser.userTypeId);

        res.status(200).json({ message: "User updated successfully", user: existingUser });
    } catch (error) {
        res.status(500).json({ message: "Error server, please try again." + error });
        console.log(error);
    }
};

export const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;

        const existingUser = await User.findByPk(userId);

        if (!existingUser) {
            return res.status(404).json({ message: "User not found" });
        }

        // Delete user
        await existingUser.destroy();

        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error server, please try again." + error });
        console.log(error);
    }
};

export const getUserById = async (req, res) => {
    try {
        const userId = req.params.id;

        const user = await User.findByPk(userId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Error server, please try again." + error });
        console.log(error);
    }
};
