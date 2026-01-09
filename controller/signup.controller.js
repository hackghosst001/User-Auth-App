import User from "../models/user.js";

export const signupUser = async (req, res) => {
    try {
        // GET → render signup page
        if (req.method === "GET") {
            return res.render("sign-up", { error: null });
        }

        const { name, email, password } = req.body;

        // check if user already exists
        const existingUser = await User.findById(email);
        if (existingUser) {
            return res.render("sign-up", {
                error: "User already exists"
            });
        }

        const user = new User({
            _id: email,
            name,
            password
        });

        await user.save();

        res.redirect("/login");

    } catch (err) {
        res.render("sign-up", {
            error: "Signup failed. Try again."
        });
    }
};
