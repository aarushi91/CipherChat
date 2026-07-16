import { Server } from "socket.io";

let io;

// userId -> socketId
const onlineUsers = new Map();

export const initSocket = (server) => {

    io = new Server(server, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"]
        }
    });

    io.on("connection", (socket) => {

        console.log("🟢 User Connected:", socket.id);

        // User joins after login
        socket.on("join", (userId) => {

            onlineUsers.set(userId, socket.id);

            io.emit(
                "onlineUsers",
                Array.from(onlineUsers.keys())
            );

            console.log("✅ User Joined");
            console.log("User:", userId);
            console.log("Socket:", socket.id);
            console.log("Online Users:", onlineUsers.size);

        });

        // Typing indicator
        socket.on("typing", ({ senderId, receiverId }) => {

            const receiverSocketId = onlineUsers.get(receiverId);

            if (receiverSocketId) {

                io.to(receiverSocketId).emit("typing", {
                    senderId
                });

                console.log(`${senderId} is typing...`);

            }

        });

        // Stop typing
        socket.on("stopTyping", ({ senderId, receiverId }) => {

            const receiverSocketId = onlineUsers.get(receiverId);

            if (receiverSocketId) {

                io.to(receiverSocketId).emit("stopTyping", {
                    senderId
                });

                console.log(`${senderId} stopped typing`);

            }

        });

        socket.on("disconnect", () => {

            for (const [userId, socketId] of onlineUsers.entries()) {

                if (socketId === socket.id) {

                    onlineUsers.delete(userId);

                    io.emit(
                        "onlineUsers",
                        Array.from(onlineUsers.keys())
                    );

                    break;

                }

            }

            console.log("🔴 User Disconnected:", socket.id);
            console.log("Online Users:", onlineUsers.size);

        });

    });

};

export { io, onlineUsers };