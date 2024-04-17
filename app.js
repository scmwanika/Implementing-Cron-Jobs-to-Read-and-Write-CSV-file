// IMPORTING DEPENDENCIES
const express = require("express");
const bodyParser = require("body-parser");
//const { readCSV } = require("./cron_jobs/readCSV");
const { writeCSV } = require("./cron_jobs/writeCSV");
const cron = require("node-cron");

const scheduledJobs = function () {
  cron.schedule("45 23 28-31 * *", function () {
    console.log("Scheduling Cron Jobs Every Last Day of the Month");
    //readCSV();
    writeCSV();
  });
};

const { PORT } = process.env;

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// DATA MODEL
const { Sequelize, sequelize } = require("./database");

const Order = require("./models/order_model")(sequelize, Sequelize);

app.use(Order);

scheduledJobs();

// APP LISTEN TO REQUESTS
app.listen(PORT, () => {
  console.log(`App running at port ${PORT}`);
});
