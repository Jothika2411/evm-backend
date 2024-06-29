import express from "express";
import { EventController } from "../controllers/event.controller.js";

const router = express.Router();

router.post("/", EventController.createEvent);
router.get("/", EventController.getAllEvents);
router.get("/:id", EventController.getAllEventsById);
router.patch("/:id", EventController.updateEvent);
router.delete("/:id", EventController.deleteEvent);

export default router;
