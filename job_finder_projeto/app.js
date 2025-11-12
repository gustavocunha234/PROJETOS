const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const path = require("path");
const db = require("./db/connection");
const bodyParser = require("body-parser");
const job = require("./models/Job");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

//body parser

app.use(bodyParser.urlencoded({ extended: false }));

// handlebars
app.set("views", path.join(__dirname, "views"));
app.engine("handlebars", exphbs.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// static folder
app.use(express.static(path.join(__dirname, "public")));

//db connection

db.authenticate()
  .then(() => {
    console.log("Database connected successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

//routes
app.get("/", (req, res) => {
  let search = req.query.job;

  if (!search) {
    job
      .findAll({ order: [["createdAt", "DESC"]] })
      .then((jobs) => {
        res.render("index", { jobs });
      })
      .catch((err) => console.error(err));
  } else {
    job
      .findAll({
        where: { title: { [db.Sequelize.Op.like]: "%" + search + "%" } },
        order: [["createdAt", "DESC"]],
      })
      .then((jobs) => {
        res.render("index", { jobs, search });
      })
      .catch((err) => console.error(err));
  }
});

// jobs routes
app.use("/jobs", require("./routes/jobs"));
