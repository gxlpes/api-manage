import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

const lockers = [
  {
    number: "001",
    room: "GV1",
    state: "occupied",
    student: "Guilherme",
  },
  {
    number: "002",
    room: "GV1",
    state: "free",
    student: "",
  },
];

/////////////////////// all routes are using /lockers
// get method
router.get("/", (req, res) => {
  res.send(lockers);
});

// post method
router.post("/", (req, res) => {
  const locker = req.body;

  lockers.push({ ...locker, id: uuidv4() });

  res.send(`Added locker ${locker.number}`);
});

export default router;
