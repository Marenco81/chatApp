import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: "15d"
    });
    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
        httpOnly: true, // to prevent XSS (cross-site scripting) attacks
        sameSite: "strict", // CSRF (cross-site request forgery) protection
        secure: process.env.NODE_ENV !== "development", // cookie will only be set in https in production
    });
};

export default generateTokenAndSetCookie;