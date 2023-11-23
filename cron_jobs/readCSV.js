// IMPORT DEPENDENCIES
const fs = require("fs");
const Pool = require("pg").Pool;
const fastcsv = require("fast-csv");

const { HOST, USER, PASSWORD, USER_PORT } = process.env;

// Create a connection to the database
const pool = new Pool({
  host: `${HOST}`,
  user: `${USER}`,
  database: `${USER}`,
  password: `${PASSWORD}`,
  port: `${USER_PORT}`,
});

const rs = fs.createReadStream(
  "C:/Users/DELL/OneDrive/Desktop/Jokisereko/business.csv"
);

const readCSV = function () {
  let csvData = [];
  let csvStream = fastcsv
    .parse()
    .on("data", function (data) {
      csvData.push(data);
    })
    .on("end", function () {
      // remove header
      csvData.shift();

      // open the PostgreSQL connection
      pool.connect((err, client, done) => {
        if (err) throw err;

        try {
          // upload business to PostgreSQL online service
          const insert = `INSERT INTO businesses VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`;

          csvData.forEach((row) => {
            client.query(insert, row, (err, res) => {
              if (err) console.log(err.stack);
            });
          });
        } finally {
          done();
        }
      });
    });
  rs.pipe(csvStream);
};

module.exports = { readCSV };
