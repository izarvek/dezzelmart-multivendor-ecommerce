const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    avatar: {
      type: String,
      default: null,
    },
    userInfo: {
      fullname: {
        type: String,
        trim: true,
        default: null,
      },
      phone: {
        type: String,
        trim: true,
        default: null,
      },
      gender: {
        type: String,
        trim: true,
        default: null,
      },
      dob: {
        type: Date,
        default: null,
      },
    },
    userAddress: {
      country: {
        type: String,
        trim: true,
        default: "India",
      },
      city: {
        type: String,
        trim: true,
        default: null,
      },
      postal: {
        type: Number,
        trim: true,
        default: null,
      },
      address: {
        type: String,
        trim: true,
        default: null,
      },
    },
    roles: {
      type: [String],
      default: ["user"],
    },
    permissions: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;
