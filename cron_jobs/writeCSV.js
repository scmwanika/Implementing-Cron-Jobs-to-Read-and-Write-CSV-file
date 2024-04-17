// IMPORT DEPENDENCIES
const fs = require("fs");
const Pool = require("pg").Pool;
const fastcsv = require("fast-csv");

const { DATABASE_NAME, USER, PASSWORD, HOST, USER_PORT } = process.env;

// Create a connection to the database
const pool = new Pool({  
  database: `${DATABASE_NAME}`,
  user: `${USER}`,
  password: `${PASSWORD}`,
  host: `${HOST}`,
  port: `${USER_PORT}`,
});

const ws = fs.createWriteStream(
  "C:/Users/DELL/OneDrive/Desktop/Jokisereko/orders.csv"
);

const writeCSV = function () {
  // open the PostgreSQL connection
  pool.connect((err, client, done) => {
    if (err) throw err;

    // download business from PostgreSQL online service
    client.query("SELECT * FROM orders", (err, res) => {
      done();

      if (err) {
        console.log(err.stack);
      } else {
        const jsonData = JSON.parse(JSON.stringify(res.rows));

        fastcsv
          .write(jsonData, { headers: true })
          .on("finish", function () {
            console.log("file downloaded successfully!");
          })
          .pipe(ws);
      }
    });
  });
};

module.exports = { writeCSV };
