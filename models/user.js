import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    _id: {
        type: String, // email as primary key
        required: true
    },

    name: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    signupDate: {
        type: Date,
        default: Date.now
    }
}, { _id: false });

const User = mongoose.model("users", userSchema);

export default User;
