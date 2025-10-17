Promise.resolve().then(() => {
  setTimeout(() => console.log("Timeout inside Promise"), 0);
  process.nextTick(() => console.log("nextTick inside Promise"));
  console.log("Promise resolved");
});
