import User from "../models/User.js";

export const getMyProfile = async (req, res) => {

    try {

        res.status(200).json({

            success: true,

            user: req.user

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};

export const updateProfile = async (req, res) => {

    try {

        const {
            fullName,
            bio,
            avatar,
        } = req.body;

        const updatedUser = await User.findByIdAndUpdate(

            req.user.id,

            {
                fullName,
                bio,
                avatar,
            },

            {
                new: true,
                runValidators: true,
            }

        ).select("-password");

        return res.status(200).json({

            success: true,
            message: "Profile updated successfully",

            user: updatedUser,

        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error",

        });

    }

};

export const getAllUsers = async (req, res) => {

    try {

        const users = await User.find({

            _id: {
                $ne: req.user.id,
            },

        }).select("-password");

        return res.status(200).json({

            success: true,

            users,

        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error",

        });

    }

};

export const searchUsers = async (req, res) => {

    try {

        const { query } = req.query;

        const users = await User.find({

            $or: [

                {
                    fullName: {
                        $regex: query,
                        $options: "i",
                    },
                },

                {
                    username: {
                        $regex: query,
                        $options: "i",
                    },
                },

            ],

            _id: {
                $ne: req.user.id,
            },

        }).select("-password");

        return res.status(200).json({

            success: true,

            users,

        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error",

        });

    }

};