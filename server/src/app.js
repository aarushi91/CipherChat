import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import isAuthenticated from "./middleware/auth.middleware.js";
import friendRoutes from "./routes/friend.routes.js";
import messageRoutes from "./routes/message.routes.js";

dotenv.config({
  path: "./.env",
});

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(helmet());

app.use(cookieParser());

app.use(morgan("dev"));

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/friends", friendRoutes);
app.use("/api/messages", messageRoutes);

app.get(
    "/profile",
    isAuthenticated,
    (req, res) => {

        res.json({
            success: true,
            user: req.user
        });

    }
);

app.get("/profile", isAuthenticated, (req, res) => {

    res.status(200).json({

        success: true,

        message: "Profile fetched successfully",

        user: req.user

    });

});

export default app;