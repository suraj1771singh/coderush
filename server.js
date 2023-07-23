const e = require("express");
const express = require("express");
const route = require("./Routes/routes");
const app = express();
const bodyParser = require("body-parser");
const PORT = 7000;
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use("/", route);

app.listen(PORT, (err) => {
  if (err) console.log("Error in listening PORT");
  else console.log("Server running at PORT ", PORT);
});
