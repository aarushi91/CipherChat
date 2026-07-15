import express from "express";

import {
    sendFriendRequest,
    acceptFriendRequest,
    rejectFriendRequest,
    getPendingRequests,
    getSentRequests,
    getFriends,
    removeFriend,
    cancelFriendRequest
} from "../controllers/friend.controller.js";

import isAuthenticated from "../middleware/auth.middleware.js";

const router = express.Router();

router.post(
    "/send/:id",
    isAuthenticated,
    sendFriendRequest
);

router.put(
    "/accept/:id",
    isAuthenticated,
    acceptFriendRequest
);

router.put(
    "/reject/:id",
    isAuthenticated,
    rejectFriendRequest
);

router.get(
    "/",
    isAuthenticated,
    getFriends
);

router.delete(
    "/remove/:id",
    isAuthenticated,
    removeFriend
);

router.delete(
    "/cancel/:id",
    isAuthenticated,
    cancelFriendRequest
);

router.get(
    "/pending",
    isAuthenticated,
    getPendingRequests
);

router.get(
    "/sent",
    isAuthenticated,
    getSentRequests
);

export default router;