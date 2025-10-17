const fs = require("fs");

setImmediate(() => console.log("setImmediate"));

setTimeout(() => console.log("Time expired"), 0);

Promise.resolve().then(() => console.log("Promise resolved"));

fs.readFile("./file.txt", "utf8", () => console.log("File Reading CB"));

process.nextTick(() => {
  process.nextTick(() => console.log("inner nextTick"));
  console.log("nextTick");
});

console.log("End of script");
