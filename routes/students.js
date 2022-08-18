import express from "express";

const router = express.Router();

router.get("/students", (req, res) => {
  res.send("Hello!");
});

export default router;
