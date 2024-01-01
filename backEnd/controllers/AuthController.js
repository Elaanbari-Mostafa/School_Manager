import User from "../modules/User.js";
import jwt from "jsonwebtoken";
import UserRole from "../modules/UserRole.js";
import Role from "../modules/Role.js";
import UserType from "../modules/UserType.js";

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
            attributes: ['userName', 'id'],
            include: [
                {
                    model: UserType,
                    attributes:['id','typeName']
                },
                {
                    model: UserRole,
                    attributes: ['id'],
                    include: [
                        {
                            model: Role,
                            attributes: ['libelle']
                        }
                    ]
                },

            ]
        });

        if (!existingUser) return res.status(202).json({ message: "User doesn't exist." });
        const roles = existingUser.UserRoles ? existingUser.UserRoles.map(UserRole => UserRole.Role ? UserRole.Role.libelle : null) : [];
        const token = jwt.sign(
            {
                userName: existingUser.userName,
                id: existingUser.id,
                userType: existingUser.UserType,
                roles: roles
            },
            JWTSECRET, { expiresIn: "8h" }
        );

        res.status(200).json({ token: token });

    } catch (error) {
        res.status(500).json({ message: "Error server, please try again." });
        console.log(error);
    }
};