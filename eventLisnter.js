const express = require("express");
const app = express();
const EventEmitter = require("events");
const { log } = require("console");
const { connected } = require("process");
const event = new EventEmitter();

let count = 0;

event.on("onClick", () => {
  count++;
  console.log(count);
});

app.get("/first", (res, rep) => {
  rep.send("api called");
  event.emit("onClick");
});

app.get("/second", (res, rep) => {
  rep.send("api called");
  event.emit("onClick");
});

app.get("/third", (res, rep) => {
  rep.send("api called");
  event.emit("onClick");
});

app.listen(3000);
