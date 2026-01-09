import mongoose from "mongoose";

const loginHistorySchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    loginDate: {
        type: Date,
        default: Date.now
    }
});

const LoginHistory = mongoose.model("loginhistory", loginHistorySchema);

export default LoginHistory;
