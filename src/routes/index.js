import express from "express";
import userRoutes from "./index.route.js";


const router = express.Router();

router.use("/register", userRoutes);

export default router;