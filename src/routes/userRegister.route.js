import express from "express";
import { RegisteredUserController } from "../controllers/userRegister.controller.js";

const router = express.Router();

router.post("/", RegisteredUserController.createUser);
router.get("/", RegisteredUserController.getUser);


export default router;
