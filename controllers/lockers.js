import { v4 as uuidv4 } from "uuid"; // generate a random id

let lockers = [];

export const getLockers = (req, res) => {
  res.send(lockers);
};

export const createLocker = (req, res) => {
  const locker = req.body;
  lockers.push({ ...locker, id: uuidv4() });
  res.send(`Lock with the ${locker.number} added!`);
};

export const getLocker = (req, res) => {
  const { id } = req.params;
  const foundLocker = lockers.id((locker) => locker.id === id);
  res.send(foundLocker);
};

export const deleteLocker = (req, res) => {
  (req, res) => {
    const { id } = req.params;
    lockers = lockers.filter((locker) => locker.id !== id);
    res.send(`Lock with the ${id} deleted from the database`);
  };
};

export const updateLocker = (req, res) => {
  const { id } = req.params;
  const { number, room, state } = req.body;

  const lockerToBeUpdated = lockers.find((locker) => locker.id === id);

  if (number) lockerToBeUpdated.number = number;
  if (room) lockerToBeUpdated.room = room;
  if (state) lockerToBeUpdated.state = state;

  res.send(`Locker with the ${id} has been updated!`);
};
