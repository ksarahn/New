import express from "express";
import { deleteUser, getAllUser, getUser, updateUser } from "../controller/users-controller.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/checkauthentication", verifyToken, (req,res,next)=>{
  res.send("hello user you are authenticated");
});

router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
    res.send("hello user you are authenticated and you can delete your account");
});

router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
    res.send("hello admin, you are looged in and you can delete all accounts");
});

router.put("/:id", verifyUser, updateUser);

router.delete("/:id", verifyUser, deleteUser);

router.get("/:id", verifyUser, getUser);

router.get("/", verifyAdmin, getAllUser);

export default router;