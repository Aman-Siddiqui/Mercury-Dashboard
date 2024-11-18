const express = require("express");
const app = express();

// Hardcoded data
const data = [
  { date: "2024-10-14", halfDate: "oct 13", value: 5200000.0 },
  { date: "2024-10-13", halfDate: "oct 14", value: 2144707.08 },
  { date: "2024-10-15", halfDate: "oct 15", value: 4300000.25 },
  { date: "2024-10-16", halfDate: "oct 16", value: 5405000.5 },
  { date: "2024-10-17", halfDate: "oct 17", value: 2500000.75 },
  { date: "2024-10-18", halfDate: "oct 18", value: 6555000.1 },
  { date: "2024-10-19", halfDate: "oct 19", value: 5600000.25 },
  { date: "2024-10-20", halfDate: "oct 20", value: 2650000.3 },
];

// Create GET API to return the data
app.get("/data", (req, res) => {
  res.json(data);
});

app.listen(8081, () => {
  console.log("Server started on port 8081");
});
