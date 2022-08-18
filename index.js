import express from "express";
import bodyParser from "body-parser"; // take body from incoming request

import lockersRoutes from "./routes/lockers.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use("/lockers", lockersRoutes);

app.get("/", (req, res) => {
  console.log("testing");
  res.send("Hello World!");
});

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}.`));
