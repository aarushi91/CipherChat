import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";
import sendToken from "../utils/sendToken.js";

export const register = async (req, res) => {
    try {

        const {
            fullName,
            username,
            email,
            password
        } = req.body;

        if (
            !fullName ||
            !username ||
            !email ||
            !password
        ) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        const existingUser = await User.findOne({
            $or: [
                { email },
                { username }
            ]
        });

        if (existingUser) {

            if (existingUser.email === email) {
                return res.status(400).json({
                    success: false,
                    message: "Email already registered"
                });
            }

            if (existingUser.username === username) {
                return res.status(400).json({
                    success: false,
                    message: "Username already taken"
                });
            }

        }

        const user = await User.create({
            fullName,
            username,
            email,
            password
        });

        const createdUser = await User.findById(user._id).select("-password");

        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            user: createdUser
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });

    }
};

export const login = async (req, res) => {

    try {

        const { email, password } = req.body;

        if (!email || !password) {

            return res.status(400).json({
                success: false,
                message: "Email and Password are required"
            });

        }

        const user = await User.findOne({
            email
        });

        if (!user) {

            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });

        }

        const isPasswordCorrect =
            await user.comparePassword(password);

        if (!isPasswordCorrect) {

            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });

        }

        const token = generateToken(user._id);

        const loggedInUser =
            await User.findById(user._id)
                .select("-password");

        sendToken(
          loggedInUser,
          token,
          200,
          res
        );
    } catch (error) {

        console.error(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};

export const logout = async (req, res) => {

    res
        .status(200)
        .cookie("token", "", {
            httpOnly: true,
            expires: new Date(0)
        })
        .json({
            success: true,
            message: "Logged out successfully"
        });

};