const express = require("express");
const path = require("path");

const app = express();
const port = 4500;

const indexRouter = require("./routes/irrigar.routes");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);

app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log(`El servidor está corriendo en el puerto ${port} | http://localhost:${port}/`);
});
