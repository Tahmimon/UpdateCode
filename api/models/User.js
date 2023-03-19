const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        username: { type: String,  unique: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        photo: { type: String, default: "" },
        dateOfBirth: { type: Date },
        role: { type: String, default: "USER" },
        fullName: { type: String },
        phoneNumber: { type: String },
        address: {
            type: String
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
