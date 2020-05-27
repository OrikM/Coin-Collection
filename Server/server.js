const express = require("express");
const bcrypt = require("bcrypt");
const randomString = require("./randomString");
const cors = require("cors");
const fs = require("fs");
const mysql = require("mysql");
const port = 3001;
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1234567",
  database: "demo",
});

function checkCredentials(req) {
  const userLogin = req.body.login;
  const userPass = req.body.pass;
  const user = users.find((u) => u.login === userLogin);
  if (!user) {
    return false;
  }
  const salt = user.salt;
  const hash = bcrypt.hashSync(userPass, salt);
  if (user.hash === hash) {
    return true;
  } else {
    return false;
  }
}

app.get("/coins/:type_id", (req, res) => {
  pool.query(
    "SELECT * FROM coins WHERE typeId =" + req.params["type_id"],
    (err, data) => {
      if (!err) {
        res.json(data);
      } else {
        res.sendStatus(404);
      }
    }
  );
});

app.get("/all_coins/", (req, res) => {
  pool.query("SELECT * FROM coins ", (err, data) => {
    if (!err) {
      res.json(data);
    } else {
      res.sendStatus(404);
    }
  });
});

app.get("/coin/:id", (req, res) => {
  const sql = `SELECT * FROM coins WHERE id = ?`;
  const sqlUpdate = `UPDATE coins SET view = view + 1 WHERE id = ?`;
  pool.query(sql, [req.params.id], (err, data) => {
    pool.query(sqlUpdate, [req.params.id], (err) => {
      if (!err) {
        res.json(data[0]);
      } else {
        res.sendStatus(500);
      }
    });
  });
});

app.get("/coinbyid/:id", (req, res) => {
  const coinId = req.params.id;
  const sql = `SELECT * FROM \`coins\` WHERE id = ${coinId}`;

  pool.query(sql, (err, data) => {
    if (err) {
      res
        .status(500)
        .json({ message: "An error occurred while requesting data" });
    } else if (data.length === 0) {
      res
        .status(404)
        .json({ message: "Coins with the specified id do not exist" });
    } else {
      res.status(200).json(data[0]);
    }
  });
});

const COIN_TEMPLATE = {
  name: "",
  typeId: "",
  year_issue: "",
  price: "",
  country: "",
  metal: "",
  short_desc: "",
  long_desc: "",
  quality: "",
  weight: "",
  obverse_img: "",
  reverse_img: "",
  face_value: "",
};

app.put("/coins/:id", (req, res) => {
  const id = req.params.id;
  const coinData = {};
  // const token = req.body.token;
  // const sqlToCheckToken = `SELECT role FROM \`tokens\` WHERE \`token\` = "${token}"`;

  // получение данных из запроса по шаблону COIN_TEMPLATE
  for (let field in COIN_TEMPLATE) {
    if (req.body[field]) {
      coinData[field] = req.body[field];
    }
  }

  // формирование sql запроса по введённым критериям
  const sql = `UPDATE \`coins\` SET ${[
    ...[...Object.keys(coinData)].map(
      (key) => `\`${key}\` = "${coinData[key]}"`
    ),
  ].join(", ")} WHERE id = ${id}`;

  // pool.query(sqlToCheckToken, (err, data) => {
  //   if (err) {
  //     res.status(500).json({message: 'An error occurred while requesting data'})
  //   } else if (data.length === 0 || data[0].role !== 'admin') {
  //     res.status(401).json({message: 'You do not have sufficient permissions to perform this operation'})
  //   } else {
  pool.query(sql, (err) => {
    if (err) {
      res.status(500).json({ message: "An error occurred while saving data" });
    } else {
      pool.query(`SELECT * FROM \`coins\` WHERE id = ${id}`, (err, data) => {
        if (err) {
          res
            .status(500)
            .json({ message: "An error occurred while retrieving data" });
        } else {
          res.status(200).json({
            coin: data[0],
            edited: true,
            message: `Coin ${data[0].name} updated successfully`,
          });
        }
      });
    }
  });
  //   }
  // })
});

app.post("/coins/add/", (req, res) => {
  // const token = req.body.token;
  // const sqlToCheckToken = `SELECT role FROM \`tokens\` WHERE \`token\` = "${token}"`;
  const coinData = { ...COIN_TEMPLATE };

  for (let field in coinData) {
    if (req.body[field]) {
      coinData[field] = req.body[field];
    }
  }

  const keys = [...Object.keys(coinData)];
  const sql = `INSERT INTO \`coins\` (${keys
    .map((key) => `\`${key}\``)
    .join(", ")}) 
                 VALUES (${keys
                   .map((key) => `"${coinData[key]}"`)
                   .join(", ")})`;

  // pool.query(sqlToCheckToken, (err, data) => {
  //   if (err) {
  //     res.status(500).json({message: 'An error occurred while requesting data'})
  //   } else if (data.length === 0 || data[0].role !== 'admin') {
  //     res.status(401).json({message: 'You do not have sufficient permissions to perform this operation'})
  //   } else {
  pool.query(sql, (err) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: "An error occurred while writing data" });
    } else {
      pool.query(
        `SELECT * FROM \`coins\` WHERE name = "${coinData.name}"`,
        (err, data) => {
          if (err) {
            res
              .status(500)
              .json({ message: "An error occurred while retrieving data" });
          } else {
            res.status(200).json({
              coin: data[0],
              added: true,
              message: `Coin ${data[0].name} has been successfully added.`,
            });
          }
        }
      );
    }
  });
  //   }
  // })
});

app.delete("/coins/:id", (req, res) => {
  const id = req.params.id;
  // const token = req.body.token;
  // const sqlToCheckToken = `SELECT role FROM \`tokens\` WHERE \`token\` = "${token}"`;
  const sqlToGetCoin = `SELECT * FROM \`coins\` WHERE id = "${id}"`;
  const sqlToDeleteCoin = `DELETE FROM \`coins\` WHERE id = "${id}"`;

  // pool.query(sqlToCheckToken, (err, data) => {
  //   if (err) {
  //     res.status(500).json({message: 'An error occurred while requesting data'})
  //   } else if (data.length === 0 || data[0].role !== 'admin') {
  //     res.status(401).json({message: 'You do not have sufficient permissions to perform this operation'})
  //   } else {
  pool.query(sqlToGetCoin, (err, data) => {
    if (err) {
      res
        .status(500)
        .json({ message: "An error occurred while retrieving data" });
    } else if (data.length === 0) {
      res
        .status(404)
        .json({ message: "Coins with the specified identifier do not exist" });
    } else {
      pool.query(sqlToDeleteCoin, (err) => {
        if (err) {
          res
            .status(500)
            .json({ message: "An error occurred while deleting data." });
        } else {
          res.status(200).json({
            data,
            deleted: true,
            message: `Coin ${data[0].name} removed successfully`,
          });
        }
      });
    }
  });
  //   }
  // })
});

const CRITERIA_TEMPLATE = {
  country: "",
  composition: "",
  quality: "",
  priceFrom: "",
  priceTo: "",
  yearFrom: "",
  yearTo: "",
  group: "",
};

app.post("/filter/", (req, res) => {
  const { limit, keyword, offset } = req.body;

  const sqlLimit = limit ? ` LIMIT ${limit} OFFSET ${offset || 0}` : "";
  const filters = [];
  let sql =
    "SELECT `id`, `name`, `short_desc`, `obverse_img`, `view` FROM `coins`";
  const sqlFilters = (criteria) => ({
    country: `\`country\` = "${criteria.country}"`,
    composition: `\`composition\` = "${criteria.composition}"`,
    quality: `\`quality\` = "${criteria.quality}"`,
    priceFrom: `CAST(SUBSTR(\`price\`, 1, CHAR_LENGTH(\`price\`)-1) AS SIGNED) >= "${criteria.priceFrom}"`,
    priceTo: `CAST(SUBSTR(\`price\`, 1, CHAR_LENGTH(\`price\`)-1) AS SIGNED) <= "${criteria.priceTo}"`,
    yearFrom: `CAST(\`year_issue\` AS SIGNED) >= "${criteria.yearFrom}"`,
    yearTo: `CAST(\`year_issue\` AS SIGNED) <= "${criteria.yearTo}"`,
    group: `\`group\` = "${criteria.group}"`,
  });
  function sqlFilterByKeyword(filters, field, keyword) {
    return `${sql}${
      filters.length ? filters.join(" AND ") + " AND " : ""
    }\`${field}\` LIKE "%${keyword}%"`;
  }
  // получение существующиъ критериев поиска по шаблону CRITERIA_TEMPLATE
  for (let value in CRITERIA_TEMPLATE) {
    if (req.body[value]) {
      filters.push(sqlFilters(req.body)[value]);
    }
  }
  if (filters.length > 0 || keyword) {
    sql += " WHERE ";
    if (keyword) {
      sql = ["name", "short_desc", "long_desc"]
        .map((field) => sqlFilterByKeyword(filters, field, keyword)) // последовательность для приоритета поиска
        .join(" UNION "); // по ключевому слову
    } else {
      sql += filters.join(" AND ");
    }
  }
  pool.query(sql, (err, count) => {
    if (err) {
      res.status(500).json({
        coins: [],
        message: "An error occurred while requesting data",
      });
    } else {
      pool.query(sql + sqlLimit, (err, data) => {
        if (err) {
          res.status(500).json({
            coins: [],
            message: "An error occurred while requesting data",
          });
        } else if (data.length === 0) {
          res.status(404).json({
            coins: [],
            message: "No coins found for these criteria",
            notfound: true,
          });
        } else {
          res.status(200).json({ coins: data, count: count.length });
        }
      });
    }
  });
});
function addCoin(coin) {
  const sql = `INSERT INTO coins
    (name, face_value, year_issue, price, country, metal, quality, weight, short_desc, long_desc, 
        obverse_img, reverse_img, view, typeId)
    VALUES
    ('${coin.header}', '${
    coin.denomination
  }', ${+coin.year}, ${+coin.price}, '${coin.country}', 
    '${coin.composition}', '${coin.quality}',
    ${+coin.weight}, '${coin.shortDescription}', '${coin.description}', '${
    coin.avers
  }', '${coin.revers}', 0,  ${coin.group})`;
  console.log(sql);
  pool.query(sql, (err, data) => {
    if (!err) {
      console.log(data);
    } else {
      console.log(err);
    }
  });
}

function loadTasksFromJson() {
  const rawdata = fs.readFileSync("./Server/coins.json");
  let coins = JSON.parse(rawdata);
  coins.forEach(addCoin);
}

app.listen(port, () => {
  console.log("Started server at port " + port);
});
