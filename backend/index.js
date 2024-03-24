const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json({ users: [1, 2, 3, 4] });
});
app.listen(5000, () => {
  console.log("Server is running at port 5000");
});
