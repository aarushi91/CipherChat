import FriendRequest from "../models/FriendRequest.js";
import User from "../models/User.js";

export const sendFriendRequest = async (req, res) => {

    try {

        const receiverId = req.params.id;

        const senderId = req.user._id;

        // User cannot send request to themselves

        if (senderId.toString() === receiverId) {

            return res.status(400).json({
                success: false,
                message: "You cannot send friend request to yourself"
            });

        }

        // Check if receiver exists

        const receiver = await User.findById(receiverId);

        if (!receiver) {

            return res.status(404).json({
                success: false,
                message: "User not found"
            });

        }

        // Check if request already exists

        const existingRequest = await FriendRequest.findOne({
            sender: senderId,
            receiver: receiverId
        });

        if (existingRequest) {

            return res.status(400).json({
                success: false,
                message: "Friend request already sent"
            });

        }

        // Create Friend Request

        const friendRequest = await FriendRequest.create({
            sender: senderId,
            receiver: receiverId
        });

        return res.status(201).json({
            success: true,
            message: "Friend request sent successfully",
            friendRequest
        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });

    }

};

export const acceptFriendRequest = async (req, res) => {

    try {

        const requestId = req.params.id;

        const friendRequest = await FriendRequest.findById(requestId);

        if (!friendRequest) {

            return res.status(404).json({
                success: false,
                message: "Friend request not found"
            });

        }

        // Only the receiver can accept the request
        if (friendRequest.receiver.toString() !== req.user._id.toString()) {

            return res.status(403).json({
                success: false,
                message: "You are not allowed to accept this request"
            });

        }

        // Already accepted
        if (friendRequest.status === "accepted") {

            return res.status(400).json({
                success: false,
                message: "Friend request already accepted"
            });

        }

        friendRequest.status = "accepted";

        await friendRequest.save();

        return res.status(200).json({
            success: true,
            message: "Friend request accepted successfully",
            friendRequest
        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });

    }

};

export const rejectFriendRequest = async (req, res) => {

    try {

        const requestId = req.params.id;

        const friendRequest = await FriendRequest.findById(requestId);

        if (!friendRequest) {

            return res.status(404).json({
                success: false,
                message: "Friend request not found"
            });

        }

        if (
            friendRequest.receiver.toString() !==
            req.user._id.toString()
        ) {

            return res.status(403).json({
                success: false,
                message: "Unauthorized"
            });

        }

        friendRequest.status = "rejected";

        await friendRequest.save();

        return res.status(200).json({

            success: true,

            message: "Friend request rejected successfully",

            friendRequest

        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};

export const getFriends = async (req, res) => {

    try {

        const userId = req.user._id;

        const friendRequests = await FriendRequest.find({

            status: "accepted",

            $or: [
                { sender: userId },
                { receiver: userId }
            ]

        })
        .populate("sender", "-password")
        .populate("receiver", "-password");

        const friends = friendRequests.map(request => {

            if (request.sender._id.toString() === userId.toString()) {

                return request.receiver;

            }

            return request.sender;

        });

        return res.status(200).json({

            success: true,

            count: friends.length,

            friends

        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};

export const removeFriend = async (req, res) => {

    try {

        const userId = req.user._id;
        const friendId = req.params.id;

        const friendship = await FriendRequest.findOne({
            status: "accepted",
            $or: [
                {
                    sender: userId,
                    receiver: friendId
                },
                {
                    sender: friendId,
                    receiver: userId
                }
            ]
        });

        if (!friendship) {

            return res.status(404).json({
                success: false,
                message: "Friend not found"
            });

        }

        await friendship.deleteOne();

        return res.status(200).json({
            success: true,
            message: "Friend removed successfully"
        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });

    }

};

export const cancelFriendRequest = async (req, res) => {

    try {

        const senderId = req.user._id;

        const receiverId = req.params.id;

        const request = await FriendRequest.findOne({

            sender: senderId,

            receiver: receiverId,

            status: "pending"

        });

        if (!request) {

            return res.status(404).json({

                success: false,

                message: "Friend request not found"

            });

        }

        await request.deleteOne();

        return res.status(200).json({

            success: true,

            message: "Friend request cancelled successfully"

        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};

export const getPendingRequests = async (req, res) => {

    try {

        const requests = await FriendRequest.find({
            receiver: req.user._id,
            status: "pending"
        })
        .populate("sender", "fullName username email avatar")
        .sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            count: requests.length,
            requests
        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });

    }

};

export const getSentRequests = async (req, res) => {

    try {

        const requests = await FriendRequest.find({
            sender: req.user._id,
            status: "pending"
        })
        .populate("receiver", "fullName username email avatar")
        .sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            count: requests.length,
            requests
        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });

    }

};