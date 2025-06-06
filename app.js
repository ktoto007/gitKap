const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const authRouter = require("./routes/api/auth");
const personalitiesRouter = require("./routes/api/personalities");
const newsRouter = require("./routes/api/news");
const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/auth", authRouter);
app.use("/api/personalities", personalitiesRouter);
app.use("/api/news", newsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json(message);
});

module.exports = app;
