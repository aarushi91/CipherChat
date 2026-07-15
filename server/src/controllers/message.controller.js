import Message from "../models/Message.js";
import User from "../models/User.js";
import { io, onlineUsers } from "../config/socket.js";

export const sendMessage = async (req, res) => {

    try {

        const receiverId = req.params.id;

        const senderId = req.user._id;

        const { text } = req.body;

        // Check empty message

        if (!text) {

            return res.status(400).json({
                success: false,
                message: "Message cannot be empty"
            });

        }

        // Check receiver exists

        const receiver = await User.findById(receiverId);

        if (!receiver) {

            return res.status(404).json({
                success: false,
                message: "Receiver not found"
            });

        }

        // Save message

        const message = await Message.create({

            sender: senderId,

            receiver: receiverId,

            text

        });

        // Check if receiver is online
        const receiverSocketId = onlineUsers.get(receiverId.toString());

        if (receiverSocketId) {

            io.to(receiverSocketId).emit(
                "receiveMessage",
                message
            );

            console.log("📨 Message delivered instantly");

        }

        return res.status(201).json({

            success: true,

            message: "Message sent successfully",

            data: message

        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};

export const getConversation = async (req, res) => {

    try {

        const loggedInUser = req.user._id;

        const otherUser = req.params.id;

        const messages = await Message.find({

            $or: [

                {
                    sender: loggedInUser,
                    receiver: otherUser
                },

                {
                    sender: otherUser,
                    receiver: loggedInUser
                }

            ]

        }).sort({ createdAt: 1 });

        return res.status(200).json({

            success: true,

            count: messages.length,

            messages

        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};

export const markMessagesSeen = async (req, res) => {

    try {

        const senderId = req.params.id;

        const receiverId = req.user._id;

        await Message.updateMany(
            {
                sender: senderId,
                receiver: receiverId,
                isSeen: false
            },
            {
                isSeen: true
            }
        );

        // Notify sender if online

        const senderSocketId =
            onlineUsers.get(senderId.toString());

        if (senderSocketId) {

            io.to(senderSocketId).emit(
                "messagesSeen",
                {
                    seenBy: receiverId
                }
            );

            console.log("👀 Seen event sent");

        }

        return res.status(200).json({

            success: true,

            message: "Messages marked as seen"

        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};

export const getChatList = async (req, res) => {

    try {

        const myId = req.user._id;

        const messages = await Message.find({

            $or: [
                { sender: myId },
                { receiver: myId }
            ]

        }).sort({ createdAt: -1 });

        const chatsMap = new Map();

        for (const message of messages) {

            const otherUserId =
                message.sender.toString() === myId.toString()
                    ? message.receiver.toString()
                    : message.sender.toString();

            if (!chatsMap.has(otherUserId)) {

                chatsMap.set(otherUserId, message);

            }

        }

        const chats = [];

        for (const [userId, lastMessage] of chatsMap) {

            const user = await User.findById(userId)
                .select("fullName username avatar");

            // Count unread messages from this user

            const unreadCount = await Message.countDocuments({

                sender: userId,

                receiver: myId,

                isSeen: false

            });

            chats.push({

                user,

                lastMessage: lastMessage.text,

                lastMessageTime: lastMessage.createdAt,

                unreadCount

            });

        }

        return res.status(200).json({

            success: true,

            count: chats.length,

            chats

        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};

export const deleteMessage = async (req, res) => {

    try {

        const messageId = req.params.id;

        const message = await Message.findById(messageId);

        if (!message) {

            return res.status(404).json({
                success: false,
                message: "Message not found"
            });

        }

        // Only sender can delete

        if (message.sender.toString() !== req.user._id.toString()) {

            return res.status(403).json({
                success: false,
                message: "You can only delete your own message"
            });

        }

        await message.deleteOne();

        return res.status(200).json({

            success: true,

            message: "Message deleted successfully"

        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};

export const editMessage = async (req, res) => {

    try {

        const { text } = req.body;

        const message = await Message.findById(req.params.id);

        if (!message) {

            return res.status(404).json({
                success: false,
                message: "Message not found"
            });

        }

        // Only sender can edit

        if (message.sender.toString() !== req.user._id.toString()) {

            return res.status(403).json({
                success: false,
                message: "You can only edit your own message"
            });

        }

        if (!text || text.trim() === "") {

            return res.status(400).json({
                success: false,
                message: "Message cannot be empty"
            });

        }

        message.text = text;

        message.isEdited = true;

        await message.save();

        return res.status(200).json({

            success: true,

            message: "Message updated successfully",

            data: message

        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};