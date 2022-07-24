const express = require("express");
const app = express();
const port = 3000;
const database = require("./database");

app.get("/api/weather", (req, res) => {
  database.query("SELECT * FROM weather_data", (err, data) => {
    if (!err) {
      res.send({ data });
    } else console.log(err);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
