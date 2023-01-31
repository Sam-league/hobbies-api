import express from "express";
import { searchHobbies } from "@nmh/emoji-hobbies";
const app = express();

app.get("/hobbies", (req, res) => {
  try {
    let { name } = req.query;
    if (name) {
      res.status(200).send({
        status: true,
        message: "hobbies fetched successfully",
        data: searchHobbies(name),
      });
    } else {
      res.status(200).send({
        status: true,
        message: "hobbies fetched successfully",
        data: searchHobbies(),
      });
    }
  } catch (error) {
    res.status(401).send({
      status: false,
      message: error.message,
    });
  }
});

app.get("*", (req, res) => {
  res.status(404).send({
    message: "url not found",
  });
});

app.listen(8080, console.log("server is running on port 8080"));
