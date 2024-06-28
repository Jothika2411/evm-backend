import express from "express";
import userRegister from "./userRegister.route.js";
import userLogin from "./userLogin.route.js"

const router = express.Router();

router.use("/userRegister", userRegister);
router.use("/userLogin", userLogin);


export default router