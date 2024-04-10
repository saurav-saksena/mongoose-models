import express from "express";
import "dotenv/config";
const app = express();
const port = process.env.PORT;

const data = {
  user: [
    { name: "saurav", id: 1 },
    { name: "kumar", id: 2 },
    { name: "amit", id: 3 },
    { name: "aman", id: 4 },
  ],
  freshData: true,
};
app.get("/", (req, res) => {
  res.send("<h1>App is running successfully by Saurav Saksena ! <h1>");
});

app.get("/about", (req, res) => {
  res.send("<h2>Author is Kumar saruav saksena <h2>");
});

app.get("/data", (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log("app is running at http://localhost:" + port);
});
