import User from "../modules/User.js";
import jwt from "jsonwebtoken";

const { JWTSECRET } = process.env;

export const signIn = async (req, res) => {
    try {
        const { userName, password } = req.body;

        if (!userName || !password) return res.status(202).json({ message: "Please complete your information" });

        const existingUser = await User.findOne({
            where: {
                userName: userName,
                password: password
            },
        });

        if (!existingUser) return res.status(202).json({ message: "User doesn't exist." });

        const token = jwt.sign(
            {
                userName: existingUser.userName,
                id: existingUser.id
            },
            JWTSECRET, { expiresIn: "8h" }
        );

        res.status(200).json({ token: token });

    } catch (error) {
        res.status(500).json({ message: "Error server, please try again." });
        console.log(error);
    }
};