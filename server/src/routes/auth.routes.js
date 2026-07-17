import express from "express";
import {
    login,
    register,
    logout,
} from "../controllers/auth.controller.js";

import isAuthenticated from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.get("/logout", logout);

router.get("/profile", isAuthenticated, (req, res) => {

    res.status(200).json({

        success: true,

        message: "Profile fetched successfully",

        user: req.user,

    });

});

export default router;