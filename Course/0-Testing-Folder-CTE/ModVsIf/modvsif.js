const getTime = () => {
  return Date.now();
};

const testIF = () => {
  let curr = 0;
  for (let i = 0; i < 1_000_000; i++) {
    curr++;
    if (curr > 100) {
      curr = 0;
    }
  }
};

const testMod = () => {
  let curr = 0;
  for (let i = 0; i < 1_000_000; i++) {
    curr++;
    curr %= 100;
  }
};

setTimeout(() => {
  console.log("start time: ", (startTime = getTime()));
  testIF();
  console.log("stop time: ", (stopTime = getTime()));
  console.log(stopTime - startTime, "ms");
  setTimeout(() => {
    console.log("start time: ", (startTime = getTime()));
    testMod();
    console.log("stop time: ", (stopTime = getTime()));
    console.log(stopTime - startTime, "ms");
  }, 1000);
}, 1000);

setTimeout(() => {
  console.log("start time: ", (startTime = getTime()));
  testIF();
  console.log("stop time: ", (stopTime = getTime()));
  console.log(stopTime - startTime, "ms");
  setTimeout(() => {
    console.log("start time: ", (startTime = getTime()));
    testMod();
    console.log("stop time: ", (stopTime = getTime()));
    console.log(stopTime - startTime, "ms");
  }, 1000);
}, 1000);
