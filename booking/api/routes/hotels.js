import express from "express";
import Hotel from "../models/Hotels.js";
import { updateHotel,createHotel, deleteHotel, getHotel, getAllHotel, countByCity, countByType, getHotelRooms } from "../controller/hotels-controller.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/", verifyAdmin, createHotel);

router.put("/:id", verifyAdmin, updateHotel);

router.delete("/:id", verifyAdmin, deleteHotel);

router.get("/find/:id", getHotel);

router.get("/", getAllHotel);

router.get("/countByCity", countByCity);

router.get("/countByType", countByType);

router.get("/room/:id", getHotelRooms);



export default router;