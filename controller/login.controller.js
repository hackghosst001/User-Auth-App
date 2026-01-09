import User from "../models/user.js";
import LoginHistory from "../models/LoginHistory.js";

// save login record
export const saveLoginDetails = async (email) => {
    const log = new LoginHistory({
        _id: `${email}_${Date.now()}`,
        email
    });

    await log.save();
};

// handle login
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findById(email);

        if (!user || user.password !== password) {
            return res.render("login", {
                error: "Invalid email or password"
            });
        }

        await saveLoginDetails(email);

        res.redirect(`/user-profile?email=${email}`);

    } catch (err) {
        res.render("login", {
            error: "Something went wrong. Try again."
        });
    }
};
