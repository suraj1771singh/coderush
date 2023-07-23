const fs = require("fs").promises;
const express = require("express");

const router = express.Router();
const path = require("path");
const JSON_FILE_PATH = path.join(__dirname, "../db.json");

router.post("/save-data", async (req, res) => {
  const newData = req.body;
  console.log("got it ", newData);
  try {
    let data = await fs.readFile(JSON_FILE_PATH, "utf8");

    if (!data) {
      data = "[]";
    }

    const jsonData = JSON.parse(data);

    jsonData.push(newData);
    await fs.writeFile(JSON_FILE_PATH, JSON.stringify(jsonData, null, 2));

    return res.json({ msg: "Data appended successfully" });
  } catch (error) {
    console.error("Error appending data:", error);
    return res.status(500).json({ error: "Error appending data" });
  }
});

module.exports = router;
