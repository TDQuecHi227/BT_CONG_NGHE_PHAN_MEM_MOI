import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import connectDB from "./config/configdb";
require("dotenv").config();

const app = express();

app.use(bodyParser.json()); //express.json()
app.use(bodyParser.urlencoded({ extended: true })); //express.urlencoded({ extended : true})

viewEngine(app);
initWebRoutes(app);
connectDB();

const port = process.env.PORT || 8081;

app.listen(port, () => {
  console.log(`App is running at http://localhost:${port}/`);
});
