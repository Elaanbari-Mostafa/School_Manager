import jwt from "jsonwebtoken";

const { JWTSECRET } = process.env;

export const isAuthenticated = (req, res, next) => {
    try {
        const authorization = req.headers.authorization && req.headers.authorization.split(' ')[1];

        if (!authorization) {
            return res.status(403).json({ "message": "Invalid token" });
        };

        const isTokenValide = jwt.verify(authorization, JWTSECRET);

        if (!isTokenValide) {
            return res.status(403).json({ "message": "Invalid token" });
        };

        next();
    } catch (error) {
        return res.status(500).json({ "message": "Invalid token" });
    }
}