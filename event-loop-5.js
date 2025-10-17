const fs = require("fs");

fs.readFile("./file.txt", "utf8", () => {
  setImmediate(() => console.log("setImmediate inside readFile"));
  process.nextTick(() => console.log("nextTick inside readFile"));
  console.log("readFile callback");
});

setImmediate(() => console.log("setImmediate"));

setTimeout(() => console.log("setTimeout"), 0);

Promise.resolve().then(() => console.log("Promise resolved"));

process.nextTick(() => console.log("nextTick"));

console.log("End of script");
