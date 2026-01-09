import express from "express";
import { signupUser } from "../controller/signup.controller.js";
import { loginUser } from "../controller/login.controller.js";
import {
    showProfile,
    updatePassword,
    showLoginHistory
} from "../controller/profile.controller.js";

const router = express.Router();

// index page
router.get("/", (req, res) => {
    res.render("index");
});

// signup
router.get("/signup-form", signupUser);
router.post("/signup-form", signupUser);


// login
router.get("/login", (req, res) => {
    res.render("login", { error: null });
});

router.post("/login", loginUser);

// profile
router.get("/user-profile", showProfile);
router.post("/update-password", updatePassword);

// login history
router.get("/login-history", showLoginHistory);

export default router;
