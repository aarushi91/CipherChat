import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 50,
    },

    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
    },

    avatar: {
      type: String,
      default: "",
    },

    bio: {
      type: String,
      default: "",
      maxlength: 150,
    },

    isVerified: {
      type: Boolean,
      default: false,
    },

    lastSeen: {
      type: Date,
      default: Date.now,
    },

    isOnline: {
      type: Boolean,
      default: false,
    },
    friends: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
    ],
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {

    if (!this.isModified("password")) {
        return next();
    }

    this.password = await bcrypt.hash(this.password, 12);

    next();

});

userSchema.methods.comparePassword = async function (
    enteredPassword
) {

    return await bcrypt.compare(
        enteredPassword,
        this.password
    );

};

const User = mongoose.model("User", userSchema);

export default User;