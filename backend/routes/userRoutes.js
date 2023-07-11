import express from "express";
import { getUserProfile,upddateUserProfile,deleteUserProfile } from "../controller/userController.js";
import { protect_verifyToken } from "../middelware/authMiddelware.js";
const router = express.Router();

router.get("/profile",protect_verifyToken, getUserProfile);
router.put("/profile",protect_verifyToken,upddateUserProfile)
router.delete("/profile",protect_verifyToken,deleteUserProfile)

export default router;