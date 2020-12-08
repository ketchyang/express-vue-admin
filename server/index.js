const express = require("express");
const cors = require("cors");
const app = express();

require("./routes/admin")(app);
require("./plugins/db")(app);

app.use(cors());
app.use(express.json());

app.get("/", function (req, res) {
  res.send("hello world");
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
