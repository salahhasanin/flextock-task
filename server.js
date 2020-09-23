const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(__dirname + "/dist/flextock-task"));
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "/dist/flextock-task/index.html"));
});
console.log("run ");
app.listen(process.env.PORT || 8000);
