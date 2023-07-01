import express from "express";
import { create, deleteProject, getAllProject, getProject, update } from "../controllers/Project-controller.js";

const router = express.Router();

router.post("/", create);

router.put("/:id", update);

router.delete("/:id", deleteProject);

router.get("/find/:id", getProject);

router.get("/", getAllProject);

export default router;