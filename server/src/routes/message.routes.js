import express from "express";

import {
    sendMessage,
    getConversation,
    markMessagesSeen,
    getChatList,
    deleteMessage,
    editMessage
} from "../controllers/message.controller.js"; 

import isAuthenticated from "../middleware/auth.middleware.js";

const router = express.Router();

router.post(
    "/send/:id",
    isAuthenticated,
    sendMessage
);

router.get(
    "/chats",
    isAuthenticated,
    getChatList
);

router.get(
    "/:id",
    isAuthenticated,
    getConversation
);

router.put(
    "/seen/:id",
    isAuthenticated,
    markMessagesSeen
);

router.put(
    "/:id",
    isAuthenticated,
    editMessage
);

router.delete(
    "/:id",
    isAuthenticated,
    deleteMessage
);

export default router;