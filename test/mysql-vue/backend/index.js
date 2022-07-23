const express = require("express");
const app = express();
const port = 3000;

const weather = {
  weather: "맑음",
  currTemp: 24,
  highestTemp: 25,
  lowestTemp: 19,
};
app.get("/api/weather", (req, res) => {
  res.send(weather);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
