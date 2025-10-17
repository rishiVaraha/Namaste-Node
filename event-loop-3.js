const fs = require("fs");

setImmediate(
  () =>
    Promise.resolve().then(() => console.log("Promise inside setImmediate")),
  console.log("setImmediate")
);

setTimeout(() => console.log("Time expired"), 0);

Promise.resolve().then(
  () => process.nextTick(() => console.log("Process.nextTick")),
  console.log("Promise resolved")
);

fs.readFile("./file.txt", "utf8", () => console.log("File Reading CB"));

process.nextTick(() => {
  Promise.resolve().then(() => console.log("Promise inside nextTick"));
  console.log("nextTick");
});

console.log("End of script");
