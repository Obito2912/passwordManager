require("dotenv").config();

const express = require("express");
const app = express();
// const pool = require("./db");
const passwordsRouter = require("./routes/passwords");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/passwords", passwordsRouter);

const PORT = process.env.PORT || 3001;

// pool.query(`SELECT * FROM passwords`, (err, res) => {
//   console.log(err, res);
// });

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
