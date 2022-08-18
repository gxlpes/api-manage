import express from "express";
import { createLocker, getLockers, getLocker, deleteLocker, updateLocker } from "../controllers/lockers.js";

const router = express.Router();

/////////////////////// all routes are using /lockers
// get lockers all
router.get("/", getLockers);

// post method to create locker
router.post("/", createLocker);

// get lockers id to unite
//colon sign permits anything after the id that has the name of parameters
router.get("/:id", getLocker);

// delete each locker from the array that has id
router.delete("/:id", deleteLocker);

// patch to edit locker
router.patch("/:id", updateLocker);

export default router;
