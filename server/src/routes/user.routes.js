import express from "express";

import {
    getMyProfile,
    updateProfile,
    getAllUsers,
    searchUsers
} from "../controllers/user.controller.js";

import isAuthenticated from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/me", isAuthenticated, getMyProfile);

router.put("/update-profile", isAuthenticated, updateProfile);

router.get("/", isAuthenticated, getAllUsers);

router.get("/search", isAuthenticated, searchUsers);

export default router;