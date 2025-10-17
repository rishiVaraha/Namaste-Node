const fs = require("fs");

const a = 100;

setImmediate(() => console.log("setImmediate"));

Promise.resolve().then(() => console.log("Promise resolved"));

fs.readFile("./file.txt", "utf8", () => {
  console.log("File read completed");
});

setTimeout(() => console.log("Time expired"), 0);

process.nextTick(() => console.log("Process.nextTick"));

function printA() {
  console.log("a=", a);
}

printA();
console.log("End of script");
