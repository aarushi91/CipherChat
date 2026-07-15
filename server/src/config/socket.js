import { Server } from "socket.io";
import jwt from "jsonwebtoken";
import { parse } from "cookie";
import User from "../models/User.js";

let io;

// Stores: userId -> socketId
const onlineUsers = new Map();

export const initSocket = (server) => {

    io = new Server(server, {
        cors: {
            origin: "http://127.0.0.1:5500",
            methods: ["GET", "POST"],
            credentials: true
        }
    });

   io.on("connection", async (socket) => {

        console.log("🟢 User Connected:", socket.id);

        const cookies = cookie.parse(
            socket.handshake.headers.cookie || ""
        );

        const token = cookies.token;

        if (!token) {

            console.log("❌ Socket Unauthorized");

            socket.disconnect();

            return;

        }

        try {

            const decoded = jwt.verify(
                token,
                process.env.JWT_SECRET
            );

            const userId = decoded.id;

            socket.userId = userId;

            onlineUsers.set(userId, socket.id);

            await User.findByIdAndUpdate(userId, {
                isOnline: true
            });

            io.emit(
                "onlineUsers",
                Array.from(onlineUsers.keys())
            );

            console.log("✅ Socket Authenticated");
            console.log("User:", userId);

        } catch (error) {

            console.log("❌ Invalid Socket Token");

            socket.disconnect();

            return;

        }

        // Keep the existing join event below for now
        // User joins after login
        socket.on("join", async (userId) => {

            onlineUsers.set(userId, socket.id);

            // Update database

            await User.findByIdAndUpdate(userId, {

                isOnline: true

            });

            io.emit(
                "onlineUsers",
                Array.from(onlineUsers.keys())
            );

            console.log("✅ User Joined");
            console.log("User:", userId);
            console.log("Socket:", socket.id);
            console.log("Online Users:", onlineUsers.size);

        });

        // User is typing
        socket.on("typing", ({ senderId, receiverId }) => {

            const receiverSocketId = onlineUsers.get(receiverId);

            if (receiverSocketId) {

                io.to(receiverSocketId).emit(
                    "typing",
                    {
                        senderId
                    }
                );

                console.log(`${senderId} is typing...`);

            }

        });

        // User stopped typing
        socket.on("stopTyping", ({ senderId, receiverId }) => {

            const receiverSocketId = onlineUsers.get(receiverId);

            if (receiverSocketId) {

                io.to(receiverSocketId).emit(
                    "stopTyping",
                    {
                        senderId
                    }
                );

                console.log(`${senderId} stopped typing`);

            }

        });

        socket.on("disconnect", async () => {

            for (const [userId, socketId] of onlineUsers.entries()) {

                if (socketId === socket.id) {

                    onlineUsers.delete(userId);

                    // Update database

                    await User.findByIdAndUpdate(userId, {

                        isOnline: false,

                        lastSeen: new Date()

                    });

                    io.emit(
                        "onlineUsers",
                        Array.from(onlineUsers.keys())
                    );

                    console.log("🔴 User Disconnected:", socket.id);

                    console.log("Online Users:", onlineUsers.size);

                    break;

                }

            }

        });
    });

};

export { io, onlineUsers };