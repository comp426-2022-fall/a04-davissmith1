#!/usr/bin/env node

import { roll } from "./lib/roll.js"
import minimist from "minimist";
import express from "express";

const args = require('minimist')(process.argv.slice(2));
const port = args.port || 5000

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//default endpoint
app.get("/app/", (req, res) =>{
    res.status(200).send("200 OK");
});

app.get("/app/roll/", (req, res) =>{
    res.status(200).send(roll(6, 2, 1));
});

app.get("/app/roll/", (req, res) =>{
    var sides = parseInt(req.body.sides);
    var dice = parseInt(req.body.dice);
    var rolls = parseInt(req.body.dice);

    res.send(roll(sides, dice, rolls));
});

app.get("/app/roll/:sides", (req, res) =>{
    res.send(roll(req.params['sides'], 2, 1))
});

app.get("/app/roll/:sides/:dice", (req, res) =>{
    res.send(roll(req.params['sides'], req.params['dice'], 1))
});

app.get("/app/roll/:sides/:dice/:rolls", (req, res) =>{
    res.send(roll(req.params['sides'], req.params['dice'], req.params['rolls']))
});

app.get("*", (req, res) =>{
    res.status(404).send("404 NOT FOUND");
});

app.listen(port);
