const express = require("express");
const app = express();

const appName = process.env.APP_NAME || "Unknown App";

app.get("/", (req, res) => {
  res.send(`Hello from ${appName}!`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`${appName} is running on port ${PORT}`);
});
