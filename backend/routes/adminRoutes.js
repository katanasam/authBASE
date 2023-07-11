import express from "express";
import { getAllUserProfile,upddateOneOrAllUserProfile,deleteOneOrAllUserProfile } from "../controller/adminController.js";
import { protect_verifyToken } from "../middelware/authMiddelware.js";
const router = express.Router();

router.get("/users", getAllUserProfile);
router.put("/profile",upddateOneOrAllUserProfile)
router.delete("/profile",deleteOneOrAllUserProfile)

export default router;