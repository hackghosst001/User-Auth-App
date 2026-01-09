import User from "../models/user.js";
import LoginHistory from "../models/LoginHistory.js";

// show profile
export const showProfile = async (req, res) => {
    try {
        const { email } = req.query;

        const user = await User.findById(email);

        if (!user) {
            return res.redirect("/login");
        }

        res.render("user-profile", { user });

    } catch (error) {
        res.send(error.message);
    }
};

// update password
export const updatePassword = async (req, res) => {
    try {
        const { email, password } = req.body;

        await User.findByIdAndUpdate(email, { password });

        res.redirect(`/user-profile?email=${email}`);

    } catch (error) {
        res.send(error.message);
    }
};

// show login history
export const showLoginHistory = async (req, res) => {
    try {
        const { email } = req.query;

        const user = await User.findById(email);
        const history = await LoginHistory.find({ email });

        res.render("login-history", { user, history });

    } catch (error) {
        res.send(error.message);
    }
};
