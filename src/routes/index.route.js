import express from "express";
import userRegister from "./userRegister.route.js";
import userLogin from "./userLogin.route.js"
import event from "./event.route.js"

const router = express.Router();

router.use("/userRegister", userRegister);
router.use("/userLogin", userLogin);
router.use("/event", event);


export default router