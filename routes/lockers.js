import express from "express";
import { v4 as uuidv4 } from "uuid"; // generate a random id

const router = express.Router();

let lockers = [];

/////////////////////// all routes are using /lockers
// get lockers all
router.get("/", (req, res) => {
  res.send(lockers);
});

// post method
router.post("/", (req, res) => {
  const locker = req.body;

  lockers.push({ ...locker, id: uuidv4() });

  res.send(`Added locker ${locker.number}`);
});

// get lockers id to unite
router.get("/:id", (req, res) => {
  //colon sign permits anything after the id that has the name of parameters
  const { id } = req.params;
  const foundLocker = lockers.id((locker) => locker.id === id);
  res.send(foundLocker);
});

// delete each locker from the array that has id
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  lockers = lockers.filter((locker) => locker.id !== id);
  res.send(`Lock with the ${id} deleted from the database`);
});

// patch to edit locker
router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const { number, room, state } = req.body;

  const lockerToBeUpdated = lockers.find((locker) => locker.id === id);

  if (number) {
    lockerToBeUpdated.number = number;
  }

  if (room) {
    lockerToBeUpdated.room = room;

    if (state) {
      lockerToBeUpdated.state = state;
    }
  }
});

export default router;
