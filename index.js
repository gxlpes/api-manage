import express from "express";
import bodyParser from "body-parser"; // take body from incoming request

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.listen(port, () => console.log("Server is running."));
