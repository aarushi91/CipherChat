import dotenv from "dotenv";
import http from "http";

import app from "./app.js";
import connectDB from "./config/database.js";
import { initSocket } from "./config/socket.js";

dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {

    // Connect Database
    await connectDB();

    // Create HTTP Server
    const server = http.createServer(app);

    // Initialize Socket.IO
    initSocket(server);

    // Start Server
    server.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });

  } catch (error) {

    console.error("❌ Failed to start server");
    console.error(error);

  }
};

startServer();