const fs = require("fs");

setTimeout(() => {
  process.nextTick(() => console.log("nextTick inside setTimeout"));
  console.log("setTimeout");
}, 0);

setImmediate(() => {
  setTimeout(() => console.log("setTimeout inside setImmediate"), 0);
  console.log("setImmediate");
});

Promise.resolve().then(() => {
  setImmediate(() => console.log("setImmediate inside Promise"));
  console.log("Promise resolved");
});

process.nextTick(() => {
  setTimeout(() => console.log("setTimeout inside nextTick"), 0);
  console.log("nextTick");
});

console.log("End of script");
