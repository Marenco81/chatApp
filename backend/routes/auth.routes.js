import express from 'express';
import { login, logout, signup } from '../controllers/auth.controllers.js';

const router = express.Router();

// router.get("/login", (req, res) => {
//     res.send("Login Route");
// }); // controllers will be created in a separate file

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

export default router;