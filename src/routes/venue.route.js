import express from "express";
import { VenueController } from "../controllers/venue.controller.js";

const router = express.Router();

router.post("/", VenueController.createVenue);
router.get("/", VenueController.getAllVenues);
router.get("/:id", VenueController.getAllVenueById);
router.patch("/:id", VenueController.updateVenue);
router.delete("/:id", VenueController.deleteVenue);

export default router;
