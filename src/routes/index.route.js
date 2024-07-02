import express from "express";
import userRegister from "./userRegister.route.js";
import userLogin from "./userLogin.route.js";
import event from "./event.route.js";
import venue from "./venue.route.js"

const router = express.Router();

router.use("/userRegister", userRegister);
router.use("/userLogin", userLogin);
router.use("/event", event);
router.use("/venue", venue)

export default router;
