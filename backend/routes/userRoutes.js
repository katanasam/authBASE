import express from "express";
import { getUserProfile,upddateUserProfile,deleteUserProfile } from "../controller/userController.js";

const router = express.Router();

router.get("/profile", getUserProfile);
router.put("/profile",upddateUserProfile)
router.delete("/profile",deleteUserProfile)

export default router;