const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const fs = require('fs');
const mysql = require('mysql');
const { v4: uuidv4 } = require('uuid');
const md5 = require('md5');

const app = express();
const port = 3003;
app.use(express.json({ limit: '10mb' }));
app.use(express.static('public'));

const con = mysql.createConnection({
    host: "192.168.8.115",
    port: "6033",
    user: "root",
    password: "naujakas2016",
    database: "baigiamasis",
  });

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(cookieParser());
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());

app.get("/containers", (req, res) => {
    const sql = `
          SELECT uniqueid, size, inside
          FROM containers
      `;
    con.query(sql, (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  });

  app.get("/boxes", (req, res) => {
    const sql = `
          SELECT id, name, weight, flammable, expirydate, photo
          FROM boxes
      `;
    con.query(sql, (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  });

app.post('/containers', (req, res) => {
    const sql = `
        INSERT INTO containers (uniqueid, size)
        VALUES (?, ?)
    `;
    con.query(sql, [Date.now(), req.body.size], (err) => {
        if (err) throw err;
        res.json({});
    });
});

app.post('/boxes', (req, res) => {
    const sql = `
        INSERT INTO boxes (name, weight, flammable, expirydate)
        VALUES (?, ?, ?, ?)
    `;
    con.query(sql, [req.body.name, req.body.weight, req.body.flammable2, req.body.expirydate2, req.body.photo], (err) => {
        if (err) throw err;
        res.json({});
    });
});

app.listen(port, () => {
    console.log(`Serve is running on port: ${port}`);
  });