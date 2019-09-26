const express = require("express");
const app = express();
const contractRoute = require("./api/routes/contacts");
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("server running " + PORT);
});

app.use("/api/contracts", contractRoute);
app.get("/", (req, res) => {
  res.send(" Hello User");
});
